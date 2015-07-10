/*global angular */

'use strict';

describe('Unit: AccountController', function () {

    var account_controller;

    beforeEach(function () {
        // instantiate the app module
        angular.mock.module('app');

        angular.mock.inject(function ($controller) {
            account_controller = $controller('AccountController');
        });
    });

    it('should exist', function () {
        expect(account_controller).toBeDefined();
    });

});