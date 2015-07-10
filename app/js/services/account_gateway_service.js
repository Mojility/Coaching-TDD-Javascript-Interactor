"use strict";

var servicesModule = require('./_index.js');
var AccountGateway = require('../primr/account_gateway');

/**
 * @ngInject
 */
function AccountGatewayService() {
  return new AccountGateway();
}

servicesModule.service('AccountGatewayService', AccountGatewayService);