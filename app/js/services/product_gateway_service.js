"use strict";

var servicesModule = require('./_index.js');
var ProductGateway = require('../primr/product_gateway');

/**
 * @ngInject
 */
function ProductGatewayService() {
    return new ProductGateway();
}

servicesModule.service('ProductGatewayService', ProductGatewayService);