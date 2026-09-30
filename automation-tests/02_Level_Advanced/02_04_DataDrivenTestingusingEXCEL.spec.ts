import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { readExcelFile } from '../../src/utils/Excel_Helper';

const filePath = path.join(__dirname,'../../test-data/02_quality-assurance/test-data-credentials.xlsx');

const credentialsExcelList = readExcelFile(filePath);

for (const credentials of credentialsExcelList) {

    test(`Data driven testing using Excel File: ${credentials.Username}`, async ({ page }) => {

        // Accessing ENV File 
        await page.goto(`${process.env.WEBSITE_LOGIN_URL}`);

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