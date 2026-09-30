import { Locator, Page } from "@playwright/test";


export class Github_HomePage {

    readonly page:Page;
    readonly usernameTextBox:Locator;
    readonly passwordTextBox:Locator;
    readonly signinButton:Locator;

    constructor(page:Page) {
        
        this.page = page;
        
        this.usernameTextBox = page.getByRole('textbox', { name: 'Username or email address' });
        this.passwordTextBox = page.getByRole('textbox', { name: 'Password' });
        this.signinButton = page.getByRole('button', { name: 'Sign in', exact: true })

    }

    async goToURL () {
        await this.page.goto(`${process.env.WEBSITE_LOGIN_URL}`);
    }

    async enterCredentials(UsernameCredentials:string, PasswordCredentials:string) {
        await this.usernameTextBox.click();
        await this.usernameTextBox.fill(UsernameCredentials);
        await this.usernameTextBox.press('Tab');
        await this.passwordTextBox.click();
        await this.passwordTextBox.fill(PasswordCredentials);
    }

    async clickingSignInButton() {
        await this.signinButton.click();
    }
}