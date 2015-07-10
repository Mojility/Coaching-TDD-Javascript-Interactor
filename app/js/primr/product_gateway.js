"use strict";

var Product = require('./product');

var PackageData = [
    {frequency: 'monthly', name: 'Hero', price: 25.0},
    {frequency: 'monthly', name: 'Leader', price: 50.0},
    {frequency: 'monthly', name: 'Champion', price: 100.0},
    {frequency: 'once', name: 'Daisy', price: 2.0},
    {frequency: 'once', name: 'Butterfly', price: 10.0},
    {frequency: 'once', name: 'Honey Bee', price: 25.0},
    {frequency: 'once', name: 'Hummingbird', price: 50.0}
];

var ProductGateway = function () {

    this.products = [];

    this.load_products = function(data) {
        this.products.length = 0;
        data.forEach(function(p) {
           this.products.push(new Product(p));
        }.bind(this));
    }.bind(this);

    this.monthly_products = function () {
        return this.filter_for_frequency(this.products, 'monthly');
    }.bind(this);

    this.one_time_products = function () {
        return this.filter_for_frequency(this.products, 'once');
    }.bind(this);

    this.monthly_products_over = function (price) {
        return this.filter_for_min_price(this.monthly_products(), price);
    };

    this.one_time_products_over = function (price) {
        return this.filter_for_min_price(this.one_time_products(), price);
    };

    this.filter_for_frequency = function (products, frequency) {
        var result = [];
        products.forEach(function (product) {
            if (product.frequency == frequency) result.push(product);
        });
        return result;
    }.bind(this);

    this.filter_for_min_price = function (products, min_price) {
        var result = [];
        products.forEach(function (p) {
            if (p.price >= min_price) result.push(p);
        });
        return result;
    }.bind(this);


    this.load_products(PackageData);

};

module.exports = ProductGateway;