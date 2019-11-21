import { Selector, t } from 'testcafe';
import { basePage } from './base.page';

export const homePage = {
    url: `${basePage.url}`,
    // Elements
    loginButton: Selector('a.login'),

    async clickLogin() { await t.click(this.loginButton) }
};