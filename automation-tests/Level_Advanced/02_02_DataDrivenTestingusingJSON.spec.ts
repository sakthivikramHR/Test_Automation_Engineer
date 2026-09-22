import { test, expect } from '@playwright/test';
import testData from '../../test-data/quality-assurance/test-data-credentials.json'


type TestData = {
    "Testdata-Set1": {
        "Username":string,
        "Password":string
    },
    "Testdata-Set2": {
        "Username":string,
        "Password":string
    },
}

const typedTestData = testData as TestData;

for (const TestdataNumber in typedTestData) {
    
    const credentials = typedTestData[TestdataNumber as keyof TestData]; 

    // Advanced test to read inputs from ENV File

    test(`Data driven testing using JSON file as inputs: ${credentials.Username}, ${credentials.Password}`, async ({ page }) => {

        // Accessing ENV File 
    await page.goto(`${process.env.GITHUB_LOGIN_URL}`);

        // Providing Username and Password
    await page.getByRole('textbox', { name: 'Username or email address' }).fill(credentials.Username);
    await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill(credentials.Password);

        // Clicking signin
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    //await page.getByText('Incorrect username or').click();

        // Assertion if Error 
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});
}




