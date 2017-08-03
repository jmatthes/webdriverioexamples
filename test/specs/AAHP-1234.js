var DOMAIN_TO_TEST = 'http://www.jnj.com';
var JIRA_ID = 'AAHP-1234';
var SEARCH_RESULTS_INFO_SELECTOR = '.Search-results-info';
var SEARCH_BUTTON_SELECTOR = '.Header-search-button';
var SEARCH_INPUT_SELECTOR = '.Search-input';

var assert = require('assert');


describe('AAHP-1234 Search functionality', function() {

    it('Searching for known subjects should return results', function () {
        browser.url(DOMAIN_TO_TEST);
		var searchButton = $(SEARCH_BUTTON_SELECTOR);
		searchButton.click();
		var searchInputField = $(SEARCH_INPUT_SELECTOR);
		searchInputField.setValue('test');
		browser.keys('\uE007');
		browser.waitForExist(SEARCH_RESULTS_INFO_SELECTOR, 50000);
     	expect(browser.getText(SEARCH_RESULTS_INFO_SELECTOR)).toContain('results that match your searchddd');
    });


    it('Searching for unknown subjects should return 0 results', function () {
        browser.url(DOMAIN_TO_TEST);
		var searchButton = $(SEARCH_BUTTON_SELECTOR);
        searchButton.click();
		var searchInputField = $(SEARCH_INPUT_SELECTOR);
		searchInputField.setValue('"This search will return no results"');
		browser.keys('\uE007');
		browser.waitForExist(SEARCH_RESULTS_INFO_SELECTOR, 50000);
      	assert.equal(browser.getText(SEARCH_RESULTS_INFO_SELECTOR), 'There are no results for the search term ""This search will return no results""');
    });

    it('Searching for null since its white space should not get to the results page', function () {
        browser.url(DOMAIN_TO_TEST);
		var searchButton = $(SEARCH_BUTTON_SELECTOR);
        searchButton.click();
		var searchInputField = $(SEARCH_INPUT_SELECTOR);
		searchInputField.setValue('\ue000');
		browser.keys('\uE007');
		// Wait some time 
		// check to see if element exists
    });

    it('Test an attempt to inject sql into search field', function () {
        browser.url(DOMAIN_TO_TEST);
		// Your code goes here
    });

    it('Test an attempt to inject javascript into search field', function () {
        browser.url(DOMAIN_TO_TEST);
		// Your code goes here
    });

    it('Test an attempt to inject a null char into search field', function () {
        browser.url(DOMAIN_TO_TEST);
		// Your code goes here
    });

});



browser.addCommand("getJiraInfo", function (customVar) {
    return {
        id: JIRA_ID,
        name: 'Searching',
        description: 'Search functionality'
    };
});