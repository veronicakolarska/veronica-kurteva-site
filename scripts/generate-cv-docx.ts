import { writeFile } from 'node:fs/promises';
import { Document, ExternalHyperlink, HeadingLevel, Packer, Paragraph, TextRun } from 'docx';
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

const section = (text: string) =>
  new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 220, after: 100 },
    keepNext: true,
  });
const body = (text: string) => new Paragraph({ text, spacing: { after: 80 } });
const bullet = (text: string) =>
  new Paragraph({ text, bullet: { level: 0 }, spacing: { after: 50 } });
const experience = (items: Experience[]) =>
  items.flatMap((role) => [
    new Paragraph({
      text: role.company,
      heading: HeadingLevel.HEADING_2,
      keepNext: true,
      spacing: { before: 160 },
    }),
    body(role.location),
    ...role.positions.flatMap((position) => [
      new Paragraph({
        children: [
          new TextRun({ text: position.title, bold: true }),
          new TextRun(` | ${position.period}`),
        ],
        keepNext: position.bullets.length > 0,
        spacing: { before: 80, after: 60 },
      }),
      ...position.bullets.map(bullet),
      ...(position.tech
        ? [
            new Paragraph({
              children: [
                new TextRun({ text: 'Technologies: ', bold: true, color: '555555' }),
                new TextRun({ text: position.tech.join(', '), color: '555555' }),
              ],
              spacing: { before: 40, after: 60 },
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
      document: { run: { font: 'Calibri', size: 21, color: '222222' } },
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
        new Paragraph({ text: site.name, heading: HeadingLevel.TITLE }),
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
        ...education.flatMap((item) => [
          new Paragraph({ text: item.degree, heading: HeadingLevel.HEADING_2, keepNext: true }),
          body(`${item.school} | ${item.period}`),
        ]),
        section('Technical skills'),
        ...skills.map((group) => body(`${group.group}: ${group.items.join(', ')}`)),
        section('Additional experience'),
        ...experience(additionalExperience),
        section('Certifications & training'),
        ...certifications.map(bullet),
        section('Interests'),
        body(interests.join(' · ')),
      ],
    },
  ],
});
await writeFile(new URL(`../dist/${cvFileBase}.docx`, import.meta.url), await Packer.toBuffer(doc));
console.log(`Generated ${cvFileBase}.docx`);
