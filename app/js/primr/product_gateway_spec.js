'use strict';

var ProductGateway = require('./product_gateway');

describe("ProductGateway", function() {

    var product_gateway = new ProductGateway();
    product_gateway.load_products(
        [
            {frequency: 'monthly', name: 'Test Low Monthly', price: 10.0},
            {frequency: 'monthly', name: 'Test Monthly', price: 25.0},
            {frequency: 'once', name: 'Test Low One-Time', price: 5.0},
            {frequency: 'once', name: 'Test One-Time', price: 25.0}
        ]
    );

    it("should contain monthly products", function() {
        expect(product_gateway.monthly_products().length).toEqual(2);
    });

    it("should contain one-time products", function() {
        expect(product_gateway.one_time_products().length).toEqual(2);
    });

    it("should filter all monthly products out with $100 threshold", function() {
       expect(product_gateway.monthly_products_over(100.0).length).toEqual(0);
    });

    it("should pass single monthly product through with $15 threshold", function() {
        expect(product_gateway.monthly_products_over(15.0).length).toEqual(1);
    });

    it("should filter all one-time products out with $100 threshold", function() {
        expect(product_gateway.one_time_products_over(100.0).length).toEqual(0);
    });

    it("should pass single one-time product through with $15 threshold", function() {
        expect(product_gateway.one_time_products_over(15.0).length).toEqual(1);
    });

});