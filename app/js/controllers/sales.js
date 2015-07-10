"use strict";

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SalesController(salesAgentService) {

    this.balance_warning = salesAgentService.balance_warning;
    this.suggested_action_text = salesAgentService.suggested_action_text;
    this.suggested_products = salesAgentService.suggested_products;
    this.suggested_products_heading = salesAgentService.suggested_products_heading;
    this.account_type_label = salesAgentService.account_type_label;

    this.upgrade_account = function(product) {
        salesAgentService.upgrade_account(product);
    }.bind(this);

}

controllersModule.controller('SalesController', ['SalesAgentService', SalesController]);