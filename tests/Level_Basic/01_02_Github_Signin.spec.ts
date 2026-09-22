import { test, expect } from '@playwright/test';

test('Testing Github Sign-in feature', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('thyhzqual');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('askdjhqweklj');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});