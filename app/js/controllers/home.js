'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeController() {

    this.title = 'Interactor / Angular Demo';

}

controllersModule.controller('HomeController', HomeController);