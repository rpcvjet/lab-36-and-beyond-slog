'use strict';
require('./scss/main.scss');

const angular = require('angular');
const uiRouter = require('angular-ui-router');
const ngMarked = require('angular-marked');
const ngClipboard = require('angular-clipboard');
const ngAnimate = require('angular-animate');
const ngTouch = require('angular-touch');


angular.module('kenblog', [uiRouter, ngMarked, ngClipboard.name, 'ngTouch', 'ngAnimate'])
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
