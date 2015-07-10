'use strict';

var PriceFormatter = require('./price_formatter');

var SalesAgent = function (accountGateway, productGateway) {

    this.priceFormatter = new PriceFormatter();

    this.balance_warning = function () {
        return accountGateway.balance < this.warning_thresh();
    }.bind(this);

    this.warning_thresh = function () {
        return accountGateway.monthly_average;
    };

    this.account_type_label = function () {
        if (accountGateway.has_monthly_plan()) {
            return accountGateway.monthly_plan.friendly_name();
        } else {
            return "Pay as you go";
        }
    };

    this.suggested_action_text = function () {
        if (accountGateway.has_monthly_plan()) {
            return "You've got a monthly plan, but it's too small! You usually spend " +
                this.priceFormatter(accountGateway.monthly_average) +
                " per month.";
        } else {
            return "You usually spend " +
                this.priceFormatter.format(accountGateway.monthly_average) +
                " per month. You can upgrade to a monthly plan, or just top up your account a bit to be safe.";
        }
    }.bind(this);

    this.suggested_products_heading = "Try one of these:";

    this.suggested_products = function () {
        var eligible_monthly = productGateway.monthly_products_over(accountGateway.monthly_average);
        var eligible_one_time = productGateway.one_time_products();
        return eligible_monthly.concat(eligible_one_time);
    };

    this.upgrade_account = function(product) {
        accountGateway.set_product(product);
    }

};

module.exports = SalesAgent;