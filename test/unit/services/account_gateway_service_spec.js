/*global angular */

'use strict';

describe('Unit: AccountGatewayService', function () {

    var service;

    beforeEach(function () {
        // instantiate the app module
        angular.mock.module('app');

        // mock the service
        angular.mock.inject(function (AccountGatewayService) {
            service = AccountGatewayService;
        });
    });

    it('should exist', function () {
        expect(service).toBeDefined();
    });

});