import { Selector, t } from 'testcafe';
import { basePage } from './base.page';

export const myAccountPage = {
    url: `${basePage.url}?controller=my-account`,

    // Elements
    accountButton: Selector('a.account'),

    getAccountButtonText() {
        return this.accountButton.innerText;
    }
};
