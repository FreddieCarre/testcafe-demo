import { axeCheck, createReport } from 'axe-testcafe';

import { getRandomEmail, User, readCsv } from '../utils/utils';
import { homePage } from '../pages/home.page';
import { signInPage } from '../pages/signIn.page';
import { registrationPage } from '../pages/registration.page';
import { myAccountPage } from '../pages/myAccount.page';

fixture('Demo test to show the capabilities of testcafe')
    .page(homePage.url);

test('Create an account', async (t) => {
    const user: User[] = readCsv('config/users.csv');
    await homePage.clickLogin();
    await t.expect(await signInPage.headingText()).eql('AUTHENTICATION');

    await signInPage.createNewAccount(getRandomEmail());
    await registrationPage.registerWithDetails(user[0]);
    await t.expect(await myAccountPage.getAccountButtonText()).eql('Test Tester')    
});

// This fails due to the page not meeting the accessibility rules.
// See here - https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
test('Homepage is accessible', async (t) => {
    const { error, violations } = await axeCheck(t);
    await t.expect(violations.length === 0).ok(createReport(violations));
}).only;