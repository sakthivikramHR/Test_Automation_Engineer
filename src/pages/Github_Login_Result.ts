import { Locator, Page, expect } from "@playwright/test";


export class Github_Result {

    readonly page:Page;
    readonly alertFunction:Locator;

    constructor(page:Page) {
        
        this.page = page;
        this.alertFunction = page.getByRole('alert');

    }

    async CheckLoginFunctionality(expectedAlert:string) {
        await expect(this.alertFunction).toContainText(expectedAlert)
    }
}