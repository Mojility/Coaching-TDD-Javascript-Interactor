"use strict";

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function AccountController(accountGatewayService) {

    this.name = accountGatewayService.name;
    this.balance = accountGatewayService.formatted_balance;
    this.has_monthly_plan = accountGatewayService.has_monthly_plan;

    accountGatewayService.view_refresh_delegate = this;
    this.refresh = function() {
        //$scope.$apply();
    }

}

controllersModule.controller('AccountController', ['AccountGatewayService', AccountController]);