import { Then } from 'cucumber'; 

import { registrationPage } from '../pages/registration.page';
import { myAccountPage } from '../pages/myAccount.page';

Then(/i complete the registration form/, async t => {
    await registrationPage.registerWithDetails();
});

Then(/i am on (.+?) account page/, async (t, params) => {
    await t.expect(await myAccountPage.getAccountButtonText()).eql(params[0]);
});