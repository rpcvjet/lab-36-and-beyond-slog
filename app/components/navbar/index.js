'use strict';

require('angular').module('kenblog')
.component('navbar', {
  template: require('./navbar.html'),
  bindings: {
    pages: '<',
    handleSelect:'<',
  },
});
