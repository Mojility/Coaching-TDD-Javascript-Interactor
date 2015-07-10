/*global angular */

'use strict';

describe('Unit: SalesController', function () {

    var sales_controller;

    beforeEach(function () {
        // instantiate the app module
        angular.mock.module('app');

        angular.mock.inject(function ($controller) {
            sales_controller = $controller('SalesController');
        });
    });

    it('should exist', function () {
        expect(sales_controller).toBeDefined();
    });

});