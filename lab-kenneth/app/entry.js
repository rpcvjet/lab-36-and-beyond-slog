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
      name:'home',
      url:'/home',
      template:'<home></home>',
    },
    {
      name: 'homepage',
      url: '/home/:id',
      template:'<home></home>',
    },
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
require('./containers/dashboard');
require('./containers/home');

require('./filter/nav-filter');
require('./filter/page-search-filter');



require('./components/login');
require('./components/navbar');
require('./components/page-editor');
require('./components/page-searchbar');
require('./components/page-select');
