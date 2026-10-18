// Derives the homepage timeline from the CV data so the two can never drift.
// Period strings stay the single source of truth; this file only interprets them.
import { additionalExperience, education, roles, type Experience } from './cv';

export interface Span {
  /** Months since January of `firstYear`, inclusive start. Negative before the window. */
  start: number;
  /** Months since January of `firstYear`, exclusive end. */
  end: number;
  ongoing: boolean;
}

export interface TimelineItem extends Span {
  title: string;
  org: string;
  period: string;
  /** One-line homepage summary, when the sources give one. */
  summary?: string;
  track: 'code' | 'cognition';
  row: 'work' | 'study';
}

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

// The present is fixed at build time so the rendered page and its tests agree.
const now = new Date();
/** The chart starts here; anything that ended earlier is summarised in a line beneath it. */
export const firstYear = 2020;
export const lastYear = now.getFullYear();
export const totalMonths = (lastYear - firstYear + 1) * 12;
export const presentMonth = (lastYear - firstYear) * 12 + now.getMonth() + 1;

function monthIndex(token: string, edge: 'start' | 'end'): number {
  const parts = token.trim().split(/\s+/);
  const year = Number(parts.at(-1));
  if (!Number.isInteger(year)) throw new Error(`Unparseable period token: "${token}"`);
  let month: number;
  if (parts.length === 2) {
    month = MONTHS.indexOf(parts[0].slice(0, 3).toLowerCase());
    if (month < 0) throw new Error(`Unknown month in "${token}"`);
  } else {
    // Year-only periods are academic years at New Bulgarian University: October to July.
    month = edge === 'start' ? 9 : 6;
  }
  return (year - firstYear) * 12 + month;
}

export function parsePeriod(period: string): Span {
  const [from, to] = period.split(/\s-\s/);
  if (!to) throw new Error(`Period needs a start and an end: "${period}"`);
  const ongoing = /present/i.test(to);
  return {
    start: monthIndex(from, 'start'),
    end: ongoing ? presentMonth : monthIndex(to, 'end') + 1,
    ongoing,
  };
}

/** Earliest start and latest end across every position at one employer. */
export function companySpan(role: Experience): Span & { period: string } {
  const spans = role.positions.map((p) => parsePeriod(p.period));
  const start = Math.min(...spans.map((s) => s.start));
  const end = Math.max(...spans.map((s) => s.end));
  const ongoing = spans.some((s) => s.ongoing);
  const first = role.positions.reduce((a, b) =>
    parsePeriod(a.period).start <= parsePeriod(b.period).start ? a : b,
  );
  const last = role.positions.reduce((a, b) =>
    parsePeriod(a.period).end >= parsePeriod(b.period).end ? a : b,
  );
  const period =
    role.positions.length === 1
      ? first.period
      : `${first.period.split(/\s-\s/)[0]} - ${last.period.split(/\s-\s/)[1]}`;
  return { start, end, ongoing, period };
}

const psychology = /psycholog/i;

const work: TimelineItem[] = [...roles, ...additionalExperience].map((role) => {
  const span = companySpan(role);
  const current = role.positions[0];
  return {
    ...span,
    title: current.title,
    org: role.company,
    summary: role.summary,
    track: psychology.test(current.title) ? 'cognition' : 'code',
    row: 'work',
  };
});

const study: TimelineItem[] = education.map((item) => {
  const span = parsePeriod(item.period);
  return {
    ...span,
    period: item.period,
    title: item.degree,
    org: item.school,
    track: psychology.test(item.degree) || /cognitive/i.test(item.degree) ? 'cognition' : 'code',
    row: 'study',
  };
});

const newestFirst = (a: Span, b: Span) => b.start - a.start;
const oldestFirst = (a: Span, b: Span) => a.start - b.start;
const inWindow = (item: TimelineItem) => item.end > 0;
/** Items that began before the window keep their label and are drawn from the left edge. */
const clip = (item: TimelineItem) => ({
  ...item,
  clipped: item.start < 0,
  start: Math.max(item.start, 0),
});

/** Every job and degree inside the window, newest first, for the vertical (mobile and print) layout. */
export const timeline = [...work, ...study].filter(inWindow).map(clip).sort(newestFirst);

/** Jobs and degrees that ended before the window, oldest first, for the summary line. */
export const earlier = [...work, ...study].filter((item) => !inWindow(item)).sort(oldestFirst);

/** Work items in chronological order with an alternating label lane for the grid layout. */
export const workLanes = work
  .filter(inWindow)
  .map(clip)
  .sort(oldestFirst)
  .map((item, i) => ({ ...item, lane: i % 2 === 0 ? 'above' : 'below' }) as const);

export const studyItems = study.filter(inWindow).map(clip).sort(oldestFirst);

export const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i);
