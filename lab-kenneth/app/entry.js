'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
const ngMarked = require('angular-marked');


angular.module('kenblog', [uiRouter, ngMarked])
.config(['$qProvider','$stateProvider', '$urlRouterProvider', function($qProvider,$stateProvider, $urlRouterProvider){
  $qProvider.errorOnUnhandledRejections(false);
  $urlRouterProvider.when('','/auth');
  let routes = [
    {
      name:'auth',
      url:'/auth',
      template:'<auth></auth>',
    },
    {
      name: 'dashboard',
      url:'/dashboard',
      template:'<dashboard></dashboard>',
    },
  ];
  routes.forEach(route => $stateProvider.state(route));

}]);

require('./service/page-service.js');
require('./service/auth-service.js');


require('./containers/auth/auth-container.js');
require('./containers/dashboard/index.js');


require('./components/login');
require('./components/page-select');
require('./components/page-editor');
