'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');


angular.module('kenblog', [uiRouter])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
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
      template:'<h1> this is the dashboard </h1>',
    },
  ];
  routes.forEach(route => $stateProvider.state(route));

}]);

require('./service/auth-service.js');
require('./containers/auth-container.js');
require('./components/login');
