/*global browser, by */

'use strict';

describe('E2E: Home', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('/');
        browser.waitForAngular();
    });

    it('should route correctly', function () {
        expect(browser.getLocationAbsUrl()).toMatch('/');
    });

    it('should show the number defined in the controller', function () {
        var element = browser.findElement(by.css('.warning'));
        expect(element.getText()).toEqual('$12.50 (Pay as you go)');
    });

});