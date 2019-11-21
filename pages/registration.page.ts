import { Selector, t } from 'testcafe';
import { basePage } from './base.page';

const newUser = require('../config/newUser.json');

export const registrationPage = {
    url: `${basePage.url}/controller=authentication&back=my-account`,

    // Elements
    mrRadio: Selector('div#uniform-id_gender1'),
    firstName: Selector('input#customer_firstname'),
    lastName: Selector('input#customer_lastname'),
    email: Selector('input#email'),
    password: Selector('input#passwd'),

    addrFirstName: Selector('input#firstname'),
    addrLastName: Selector('input#lastname'),
    address: Selector('input#address1'),
    city: Selector('input#city'),
    state: Selector('select#id_state'),
    zip: Selector('input#postcode'),
    mobile: Selector('input#phone_mobile'),
    registerButton: Selector('button#submitAccount'),

    async registerWithDetails(): Promise<TestControllerPromise> {
        var genderOpt;
        if (newUser.gender === 'Male') {
            genderOpt = this.mrRadio;
        } else {
            genderOpt = this.mrRadio;
        }
        await t.click(genderOpt)
            .typeText(this.firstName, newUser.firstName)
            .typeText(this.lastName, newUser.lastName)
            .typeText(this.password, newUser.password)
            .typeText(this.addrFirstName, newUser.firstName)
            .typeText(this.addrLastName, newUser.lastName)
            .typeText(this.address, newUser.address)
            .typeText(this.city, newUser.city)
            .click(this.state)
            .click(this.state.find('option').withText(newUser.state))
            .typeText(this.zip, newUser.zip)
            .typeText(this.mobile, newUser.mobile)
            .click(this.registerButton);
    }
};