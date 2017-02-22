'use strict';

const angular = require('angular');

angular.module('kenblog')
.component('login', {
  template: require('./login.html'),
  bindings:{
    user: '<',
    handleSubmit: '<',
  },
});
