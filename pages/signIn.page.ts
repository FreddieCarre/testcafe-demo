import { Selector, t } from 'testcafe';
import { basePage } from './base.page';

export const signInPage = {
    url: `${basePage.url}?controller=contact`,

    //Elememts
    heading: Selector('h1.page-heading'),
    emailInput: Selector('input#email_create'),
    submitBtm: Selector('button#SubmitCreate'),

    async headingText(): Promise<string> { return await this.heading.innerText },
    async enterEmail(email: string) { await t.typeText(this.emailInput, email)},
    async clickCreateAccount() { await t.click(this.submitBtm) },

    async createNewAccount(email: string) {
        await this.enterEmail(email);
        await this.clickCreateAccount();
    }
}