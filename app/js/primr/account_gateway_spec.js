'use strict';

var AccountGatweay = require('./account_gateway');
var Product = require('./product');

describe("AccountGatweay", function() {

    var testMonthlyProduct = new Product({frequency: 'monthly', name: 'Test Plan', price: 5.00});
    var testOneTimeProduct = new Product({frequency: 'once', name: 'Test Plan', price: 5.00});

    var account_gateway;

    beforeEach(function() {
        account_gateway = new AccountGatweay();
    });

    it("should give a nicely formatted account balance", function() {
        account_gateway.balance = 4.38;
        expect(account_gateway.formatted_balance()).toEqual("$4.38");
    });

    it("should determine correctly when it has no monthly plan", function() {
       account_gateway.monthly_plan = null;
        expect(account_gateway.has_monthly_plan()).toBeFalsy();
    });

    it("should determine correctly when it has a monthly plan", function() {
        account_gateway.monthly_plan = testMonthlyProduct;
        expect(account_gateway.has_monthly_plan()).toBeTruthy();
    });

    it("should correctly add a one-time product to the account", function() {
        account_gateway.balance = 5.0;
        account_gateway.set_product(testOneTimeProduct);

        expect(account_gateway.has_monthly_plan()).toBeFalsy();
        expect(account_gateway.balance).toEqual(5.0 + testOneTimeProduct.price);
    });

    it("should correctly add a monthly product to the account", function() {
        account_gateway.balance = 5.0;
        account_gateway.set_product(testMonthlyProduct);

        expect(account_gateway.has_monthly_plan()).toBeTruthy();
        expect(account_gateway.balance).toEqual(5.0 + testMonthlyProduct.price);
    });

    var TestUpdateDelegate = function() {
        this.refreshed = false;

        this.refresh = function() {
            this.refreshed = true;
        }.bind(this);
    };

    it("should correctly fire the delegate upon a product update", function() {
        var delegate = new TestUpdateDelegate();
        account_gateway.view_refresh_delegate = delegate;

        account_gateway.set_product(testMonthlyProduct);

        expect(delegate.refreshed).toBeTruthy();
    });

});