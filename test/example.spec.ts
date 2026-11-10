import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Locate and click the Get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify that navigation reached the documentation.
  await expect(page).toHaveURL(/.*docs.*/);

  // Verify that the destination page has a visible main heading.
  await expect(page.locator('h1')).toBeVisible();
});

