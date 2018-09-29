# Feed Reader Testing Project

## Project Description

In this project, a web-based application that reads RSS feeds was provided. My job was to develop several test suites using Jasmine and ensure the application passes all the test requirements.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine

### Prerequisites

In order to run this app, you will need to have `Node.js` insalled on your machine. To know if you have Node.js:
1. Run `node -v` and `npm -v` on the command line
2. If you get an error, go a head and [Install Node](https://nodejs.org/en/)


### Installing

* Clone this repo or download the repo's zip file
* Open the `index.html` file on your browser to run the app and the tests


## Requirements To Complete the Tests

These are the tests requirements that were provided:

1. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named `"The menu"`.
4. Write a test that ensures the menu element is hidden by default.
5. Write a test that ensures the menu changes visibility when the menu icon is clicked.
6. Write a test suite named `"Initial Entries"`.
7. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. Write a test suite named `"New Feed Selection"`.
9. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
10. No test should be dependent on the results of another.
11. Callbacks should be used to ensure that feeds are loaded before they are tested.
12. Implement error handling for undefined variables and out-of-bound array access.
13. When complete - all of your tests should pass.


## Dependencies

* [jQuery](https://jquery.com/)
* [Jasmine](https://jasmine.github.io/)
* [Google's JavaScript Loader API](https://www.google.com/jsapi)
* [Google Fonts](https://fonts.google.com/)
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [Handlebars](https://handlebarsjs.com/)
* [Icomoon](https://icomoon.io/)
