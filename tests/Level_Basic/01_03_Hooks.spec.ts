import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log(`Precondition starting!`)
})

test.afterAll(async () => {
  console.log(`Postcondition running!`)
})

test.beforeEach(async () => {
  console.log(`Precondition for each test`)
})

test.afterEach(async () => {
  console.log(`Postcondition for each test`)
})

test('Test1 with Hooks', async ({ page }) => {
  console.log(`Test starts..`)
  await page.goto('https://github.com/login');
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('thyhzqual');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('askdjhqweklj');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});

test('Test2 with Hooks', async ({ page }) => {
  console.log(`Test starts..`)
  await page.goto('https://github.com/login');
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('maxmustermann');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('askdjhqweklj');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});