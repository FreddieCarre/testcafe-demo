cucumber:
	./node_modules/.bin/gherkin-testcafe chrome step_definitions/*.ts features/*.feature

test:
	yarn test