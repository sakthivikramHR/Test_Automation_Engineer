import { test, expect } from '@playwright/test';

// Advanced test to read inputs from ENV File

test('Reading ENV file cofig in playwright', async ({ page }) => {
  await page.goto(`${process.env.GITHUB_LOGIN_URL}`);
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('thyhzqual');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('askdjhqweklj');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});