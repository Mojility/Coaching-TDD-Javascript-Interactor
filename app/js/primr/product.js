'use strict';

var PriceFormatter = require('./price_formatter');

var Product = function(data) {
    this.priceFormatter = new PriceFormatter();

    this.frequency = data.frequency;
    this.name = data.name;
    this.price = data.price;

    this.formatted_price = function() {
        return this.priceFormatter.format(this.price);
    }.bind(this);

    this.friendly_name = function() {
        return this.name + " " + this.formatted_price() + " - " + this.frequency;
    }.bind(this);
};

module.exports = Product;