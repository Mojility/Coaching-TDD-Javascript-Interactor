'use strict';

var PriceFormatter = function () {
    this.format = function (value) {
        return '$' + value.toFixed(2);
    };

};

module.exports = PriceFormatter;