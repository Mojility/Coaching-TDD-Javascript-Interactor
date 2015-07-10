"use strict";

var servicesModule = require('./_index.js');
var SalesAgent = require('../primr/sales_agent');

/**
 * @ngInject
 */
function SalesAgentService(accountGatewayService, productGatewayService) {
    return new SalesAgent(accountGatewayService, productGatewayService);
}

servicesModule.service('SalesAgentService', ['AccountGatewayService', 'ProductGatewayService', SalesAgentService]);