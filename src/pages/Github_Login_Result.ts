import { Locator, Page, expect } from "@playwright/test";


export class Github_Result {

    readonly page:Page;
    readonly alertFunction:Locator;

    constructor(page:Page) {
        
        this.page = page;
        this.alertFunction = page.getByRole('alert');

    }

    async CheckLoginFunctionality(expectedAlert:string) {
        const errorAlert = this.page.locator(".js-flash-alert");
        await expect(errorAlert).toBeVisible();
        await expect(errorAlert).toContainText(expectedAlert)
    }

    async assertLoginErrorVisuals(errorTestImage: number) {
        await expect(this.alertFunction).toBeVisible();

        //const errorCard = this.page.locator(".js-flash-alert");
        await expect(this.alertFunction).toHaveScreenshot([
            `screenshots`,
            `github-login-error-${errorTestImage}.png`
        ]);
  }
}