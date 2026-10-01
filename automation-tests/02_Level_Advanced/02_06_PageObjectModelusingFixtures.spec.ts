//import { test, expect } from "@playwright/test";
import { test } from "../../src/fixture/Testfixture";
import fs from "fs";
import path from "path";
import { readExcelFile } from "../../src/utils/Excel_Helper";
import { Github_HomePage } from "../../src/pages/Github_HomePage";
import { Github_Result } from "../../src/pages/Github_Login_Result";

const filePath = path.join(
  __dirname,
  "../../test-data/02_quality-assurance/test-data-credentials.xlsx",
);

const credentialsExcelList = readExcelFile(filePath);

for (const credentials of credentialsExcelList) {

  test(`Data driven testing using Page Object Model (POM) using Fixtures: ${credentials.Id}`, async ({ page }) => {

    console.log("Github Login Test with POM started..");

    const githubHomePage = new Github_HomePage(page);

    await githubHomePage.goToURL();

    await githubHomePage.enterCredentials(
      credentials.Username,
      credentials.Password,
    );

    await githubHomePage.clickingSignInButton();

    const githubLoginResult = new Github_Result(page);

    await githubLoginResult.CheckLoginFunctionality(
      "Incorrect username or password.",
    );

    console.log("Github Login Test with POM Ended..");
  });
}
