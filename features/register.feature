Feature: New user registration
As a new user
I would like to register for an account
So that I can manage my site presence

    Scenario: register
        Given i am on the home page
        When i click the login button
        Then i am on the login page
        When i enter my email
        And i click the register button
        When i complete the registration form
        Then i am on Test Tester account page