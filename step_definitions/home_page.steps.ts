import { Given, When } from 'cucumber';

import { homePage } from '../pages/home.page';

Given(/i am on the home page/, async t => {
    await t.navigateTo(homePage.url);
});

When(/i click the login button/, async t => {
    await homePage.clickLogin();
});