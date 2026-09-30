import { test, expect } from '@playwright/test';

// Advanced test to read inputs from ENV File

test('Test1: Reading ENV file config in playwright and logging in Github', async ({ page }) => {
  await page.goto(`${process.env.WEBSITE_LOGIN_URL}`);
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('thyhzqual');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('askdjhqweklj');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});