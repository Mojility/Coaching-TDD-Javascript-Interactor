'use strict';

var PriceFormatter = require('./price_formatter');

var AccountGateway = function () {

    this.priceFormatter = new PriceFormatter();

    this.name = "Mojility Inc.";
    this.balance = 12.5;
    this.monthly_average = 23.77;

    this.monthly_plan = null;

    // Calculated fields...
    this.formatted_balance = function() {
        return this.priceFormatter.format(this.balance);
    }.bind(this);

    this.has_monthly_plan = function () {
        return this.monthly_plan !== null;
    }.bind(this);

    // Methods...
    this.set_product = function(product) {
        this.balance += product.price;
        if (product.frequency === 'monthly') {
            this.monthly_plan = product;
        }
        this.refresh();
    }.bind(this);

    // View refresh management... left for illustrative purposes...
    this.view_refresh_delegate = null;
    this.refresh = function() {
        if (this.view_refresh_delegate) {
            this.view_refresh_delegate.refresh();
        }
    }.bind(this);

};

module.exports = AccountGateway;