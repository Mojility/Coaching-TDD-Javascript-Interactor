/*global angular */

'use strict';

describe('Unit: SalesAgentService', function() {

    var service;

    beforeEach(function() {
        // instantiate the app module
        angular.mock.module('app');

        // mock the service
        angular.mock.inject(function(SalesAgentService) {
            service = SalesAgentService;
        });
    });

    it('should exist', function() {
        expect(service).toBeDefined();
    });

});