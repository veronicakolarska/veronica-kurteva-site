import { test, expect } from '@playwright/test';

for (const width of [320, 768, 1440]) {
  for (const route of ['/', '/cv/']) {
    test(`${route} remains readable at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(route);
      await expect(page.locator('h1')).toBeVisible();
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(overflow).toBe(false);
      await expect(page.locator('body')).not.toContainText('Teodor Kurtev');
      await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
    });
  }
}

test('keyboard navigation, current-page state and contact links', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  await page.getByRole('link', { name: 'Read my CV' }).click();
  await expect(page.locator('nav a[aria-current="page"]')).toHaveText('CV');
  await expect(page.locator('.cv-contact a[href^="mailto:"]')).toHaveAttribute(
    'href',
    'mailto:veronica.kurteva@gmail.com',
  );
  await expect(page.locator('.cv-contact a').last()).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/veronica-kolarska/',
  );
});

test('content and navigation work without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4322/');
    await expect(page.getByRole('heading', { name: 'EGT Digital' })).toBeVisible();
    await page.getByRole('link', { name: 'Read my CV' }).click();
    await expect(page.getByRole('heading', { name: 'Technical experience' })).toBeVisible();
    await expect(page.getByText('Feb 2025 - Present')).toBeVisible();
    await expect(page.getByText('Oct 2025 - Present')).toBeVisible();
  } finally {
    await context.close();
  }
});

test('the homepage timeline is built from the CV data', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  const grid = page.locator('.timeline');
  await expect(grid).toBeVisible();
  await expect(grid.locator('.tl-item')).toHaveCount(7);
  await expect(page.locator('.timeline-earlier')).toContainText('Telepoint');
  await expect(grid.getByText('EGT Digital')).toBeVisible();
  await expect(grid.getByText('Master’s degree, Cognitive Science')).toBeVisible();
  await expect(page.locator('.timeline-list')).toBeHidden();
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(grid).toBeHidden();
  const list = page.locator('.timeline-list');
  await expect(list).toBeVisible();
  await expect(list.locator('.tl-row').first()).toContainText('Oct 2025 - Present');
  await expect(page.getByText('Working as a .NET developer.')).toHaveCount(0);
});

test('downloads are real files and the CV print layout is complete', async ({ page, request }) => {
  await page.goto('/cv/');
  for (const [extension, signature] of [
    ['pdf', '%PDF'],
    ['docx', 'PK'],
  ]) {
    const response = await request.get(`/Veronica-Kurteva-CV.${extension}`);
    expect(response.ok()).toBe(true);
    const data = await response.body();
    expect(data.subarray(0, signature.length).toString()).toBe(signature);
    expect(data.length).toBeGreaterThan(5000);
  }
  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('.site-header')).toBeHidden();
  await expect(page.locator('.download-actions')).toBeHidden();
  await expect(page.getByRole('heading', { name: 'Additional experience' })).toBeVisible();
  await expect(page.locator('figure')).toHaveCount(0);
});

test('metadata identifies Veronica without an invented production URL', async ({ page }) => {
  await page.goto('/');
  const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText());
  expect(schema.name).toBe('Veronica Kurteva');
  expect(schema.worksFor.name).toBe('EGT Digital');
  expect(schema.telephone).toBeUndefined();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  if (!process.env.SITE_URL) await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
});

test('all local page links resolve', async ({ page, request }) => {
  for (const route of ['/', '/cv/', '/404.html']) {
    await page.goto(route);
    const links = await page
      .locator('a[href^="/"]')
      .evaluateAll((elements) => elements.map((el) => el.getAttribute('href')!));
    for (const href of new Set(links)) expect((await request.get(href)).ok(), href).toBe(true);
  }
});
