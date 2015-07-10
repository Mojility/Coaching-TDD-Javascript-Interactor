'use strict';

var PriceFormatter = require('./price_formatter');

describe("PriceFormatter", function() {

    var price_formatter = new PriceFormatter();

    it("should handle $0 price", function() {
        expect(price_formatter.format(0)).toEqual("$0.00");
    });

    it("should handle regular price", function() {
        expect(price_formatter.format(15.22)).toEqual("$15.22");
    });

    it("should round down properly", function() {
        expect(price_formatter.format(15.221)).toEqual("$15.22");
    });

    it("should round up properly", function() {
        expect(price_formatter.format(15.216)).toEqual("$15.22");
    });

});