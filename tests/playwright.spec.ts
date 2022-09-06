import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('h1');
  await expect(page.locator('h1')).toContainText('“The journey of a thousand miles begins with a single step.”');
})
