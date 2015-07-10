'use strict';

var Product = require('./product');

describe("Product", function() {

    it("should instantiate and remember values", function() {
        var frequency = 'monthly';
        var name = 'Test';
        var price = 1.0;

        var p = new Product({frequency: frequency, name: name, price: price});

        expect(p.frequency).toEqual(frequency);
        expect(p.name).toEqual(name);
        expect(p.price).toEqual(price);

        expect(p.formatted_price()).toEqual("$1.00");
        expect(p.friendly_name()).toContain(name);
        expect(p.friendly_name()).toContain(p.formatted_price());
    });



});