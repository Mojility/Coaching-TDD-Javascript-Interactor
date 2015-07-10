/*global angular */

'use strict';

describe('Unit: HomeController', function () {

    var home_controller;

    beforeEach(function () {
        // instantiate the app module
        angular.mock.module('app');

        angular.mock.inject(function ($controller) {
            home_controller = $controller('HomeController');
        });
    });

    it('should exist', function () {
        expect(home_controller).toBeDefined();
    });

});