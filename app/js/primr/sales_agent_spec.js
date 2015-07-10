'use strict';

var AccountGateway = require('./account_gateway');
var ProductGateway = require('./product_gateway');
var Product = require("./product");

var SalesAgent = require('./sales_agent');

describe("SalesAgent", function () {

    var testMonthlyProduct = new Product({frequency: 'monthly', name: 'Test Plan', price: 5.00});
    var testOneTimeProduct = new Product({frequency: 'once', name: 'Test Plan', price: 5.00});

    var product_gateway;
    var account_gateway;
    var sales_agent;

    beforeEach(function () {
        product_gateway = new ProductGateway();
        account_gateway = new AccountGateway();
        sales_agent = new SalesAgent(account_gateway, product_gateway);
    });

    it("should not fire warning if monthly average is lower than balance", function () {
        account_gateway.balance = 30.0;
        account_gateway.monthly_average = 25.0;

        expect(sales_agent.balance_warning()).toBeFalsy();
    });

    it("should fire warning if monthly average is higher than balance", function () {
        account_gateway.balance = 10.0;
        account_gateway.monthly_average = 25.0;

        expect(sales_agent.balance_warning()).toBeTruthy();
    });

    it("should emit a non-empty account type label for an account with no monthly plan", function () {
        expect(sales_agent.account_type_label()).not.toBeNull();
    });

    it("should emit a reasonable account type label for an account with a monthly plan", function () {
        account_gateway.monthly_plan = testMonthlyProduct;
        expect(sales_agent.account_type_label()).toContain("monthly");
    });

    it("should upgrade an account correctly with a monthly product", function () {
        sales_agent.upgrade_account(testMonthlyProduct);
        expect(account_gateway.has_monthly_plan()).toBeTruthy();
    });

});