# TestCafe demo

This project is used for experimenting with TestCafe to demonstrate areas in which it can be used.

For help with the API's for the tools used, please see the following pages:

1. [TestCafe]("https://devexpress.github.io/testcafe/documentation/test-api/")
2. [Axe-TestCafe]("https://github.com/helen-dikareva/axe-testcafe")
3. [Gherkin-TestCafe]("https://github.com/kiwigrid/gherkin-testcafe")

## Requirements

* [Node.js (includes npm)]("https://nodejs.org/en/download/")
* [Chrome](""https://www.google.co.uk/chrome/?brand=CHBD&gclid=EAIaIQobChMI6pDu3dn75QIVyLHtCh09CQACEAAYASAAEgJZHfD_BwE&gclsrc=aw.ds)
* Yarn - run: `npm install -g yarn`

## Installation

From the root of the project, run `make init`.

## Running the tests

### Cucumber

`make cucumber`

### Vanilla TestCafe

`make test`

## Adding to tests

### Cucumber approach

The feature files exist in `features/*.feature`.

These use Gherkin syntax to define user journeys. They are matched to the step definitions in `step_definitions/*.step.ts` using regular expressions. The step definitions interact with the web pages using the page objects in `pages/*.page.ts`.

### TestCafe approach

The tests in `tests/*.test.ts` interact with the web pages using the page objects in `pages/*.page.ts`. They launch a browser to the url specified in the `page()` function.

## Recommended Plugins (VSCode)

* Cucumber (Gherkin) Full Support

Add the following to your `.vscode/settings.json`:

``` json
{
    "cucumberautocomplete.steps": [
        "./step_definitions/*.steps.ts"
    ],
    "cucumberautocomplete.syncfeatures": "features/*.feature",
    "cucumberautocomplete.strictGherkinCompletion": true
}
```
