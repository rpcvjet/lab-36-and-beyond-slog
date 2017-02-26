'use strict';

require('angular').module('kenblog')
.component('pageSelect', {
  template:require('./page-select.html'),
  bindings: {
    pages: '<',
    showAll: '<',
    selected: '<',
    handleSelect: '<',
  },
});
