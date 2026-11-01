import { readFile, writeFile } from 'node:fs/promises';
import {
  Document,
  ExternalHyperlink,
  HeadingLevel,
  HorizontalPositionAlign,
  HorizontalPositionRelativeFrom,
  ImageRun,
  Packer,
  Paragraph,
  TextRun,
  TextWrappingSide,
  TextWrappingType,
  VerticalPositionRelativeFrom,
} from 'docx';
import { site } from '../src/data/site';
import {
  summary,
  roles,
  additionalExperience,
  education,
  skills,
  certifications,
  interests,
  type Experience,
} from '../src/data/cv';
import { cvFileBase } from '../src/data/cv-filename.mjs';

// A round PNG copy of public/images/veronica.webp, because Word can't show WebP.
const photo = new ImageRun({
  type: 'png',
  data: await readFile(new URL('./assets/veronica-round.png', import.meta.url)),
  transformation: { width: 100, height: 100 },
  altText: { name: site.name, title: site.name, description: `Portrait of ${site.name}` },
  floating: {
    horizontalPosition: {
      relative: HorizontalPositionRelativeFrom.MARGIN,
      align: HorizontalPositionAlign.RIGHT,
    },
    verticalPosition: { relative: VerticalPositionRelativeFrom.PARAGRAPH, offset: 0 },
    wrap: { type: TextWrappingType.SQUARE, side: TextWrappingSide.LEFT },
    margins: { left: 182880 },
  },
});

const section = (text: string) =>
  new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 180, after: 60 },
    keepNext: true,
  });
const body = (text: string) => new Paragraph({ text, spacing: { after: 60 } });
const bullet = (text: string, keepNext = false) =>
  new Paragraph({ text, bullet: { level: 0 }, spacing: { after: 20 }, keepNext });
const experience = (items: Experience[]) =>
  items.flatMap((role) => [
    // Company and location share a line to keep the document to two pages.
    new Paragraph({
      children: [
        new TextRun(role.company),
        new TextRun({ text: `  |  ${role.location}`, bold: false, size: 19, color: '555555' }),
      ],
      heading: HeadingLevel.HEADING_2,
      keepNext: true,
      spacing: { before: 140, after: 20 },
    }),
    ...role.positions.flatMap((position) => [
      new Paragraph({
        children: [
          new TextRun({ text: position.title, bold: true }),
          new TextRun(` | ${position.period}`),
        ],
        keepNext: position.bullets.length > 0,
        spacing: { before: 60, after: 40 },
      }),
      // The last bullet stays on the same page as the technologies line.
      ...position.bullets.map((text, index) =>
        bullet(text, Boolean(position.tech) && index === position.bullets.length - 1),
      ),
      ...(position.tech
        ? [
            new Paragraph({
              children: [
                new TextRun({ text: 'Technologies: ', bold: true, color: '555555' }),
                new TextRun({ text: position.tech.join(', '), color: '555555' }),
              ],
              spacing: { before: 20, after: 40 },
            }),
          ]
        : []),
    ]),
  ]);
const doc = new Document({
  creator: site.name,
  title: `${site.name} - Curriculum Vitae`,
  description: site.description,
  styles: {
    default: {
      document: { run: { font: 'Calibri', size: 20, color: '222222' } },
      title: { run: { size: 44, bold: true } },
      heading1: { run: { size: 26, bold: true, color: '222222' } },
      heading2: { run: { size: 23, bold: true, color: '222222' } },
    },
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 800, bottom: 800, left: 850, right: 850 },
        },
      },
      children: [
        new Paragraph({ children: [photo, new TextRun(site.name)], heading: HeadingLevel.TITLE }),
        body(site.role),
        new Paragraph({
          children: [
            new TextRun(`${site.location} | ${site.email} | `),
            new ExternalHyperlink({
              link: site.linkedin,
              children: [new TextRun({ text: 'LinkedIn', style: 'Hyperlink' })],
            }),
          ],
          spacing: { after: 160 },
        }),
        body(summary),
        section('Technical experience'),
        ...experience(roles),
        section('Education'),
        ...education.map(
          (item) =>
            new Paragraph({
              children: [
                new TextRun({ text: item.degree, bold: true }),
                new TextRun(` | ${item.school} | ${item.period}`),
              ],
              spacing: { after: 60 },
            }),
        ),
        section('Technical skills'),
        ...skills.map((group) => body(`${group.group}: ${group.items.join(', ')}`)),
        section('Additional experience'),
        ...experience(additionalExperience),
        section('Certifications & training'),
        ...certifications.map((text) => bullet(text)),
        section('Interests'),
        body(interests.join(' · ')),
      ],
    },
  ],
});
await writeFile(new URL(`../dist/${cvFileBase}.docx`, import.meta.url), await Packer.toBuffer(doc));
console.log(`Generated ${cvFileBase}.docx`);
