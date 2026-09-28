import { test, expect } from '@playwright/test';
import testData from '../../test-data/quality-assurance/test-data-credentials.json';

type TestData = {
    Id: number;
    Username: string;
    Password: string;
};

const credentialsList = testData as TestData[];

for (const credentials of credentialsList) {

    test(`Data driven testing using JSON file: ${credentials.Username}`, async ({ page }) => {

        // Accessing ENV File 
        await page.goto(`${process.env.GITHUB_LOGIN_URL}`);

        // Providing Username and Password
        await page.getByRole('textbox', { name: 'Username or email address' }).fill(credentials.Username);
        await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
        await page.getByRole('textbox', { name: 'Password' }).fill(credentials.Password);

        // Clicking signin
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();

        // Assertion if Error 
        await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    });
}