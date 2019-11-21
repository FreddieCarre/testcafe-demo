import { When, Then } from 'cucumber';

import { signInPage } from '../pages/signIn.page';
import { getRandomEmail } from '../utils/utils';

Then(/i am on the login page/, async t => {
    await t.expect(await signInPage.headingText()).eql('AUTHENTICATION');
});

When(/i enter my email/, async t => {
    await signInPage.enterEmail(getRandomEmail());
});

When(/i click the register button/, async t => {
    await signInPage.clickCreateAccount();
});