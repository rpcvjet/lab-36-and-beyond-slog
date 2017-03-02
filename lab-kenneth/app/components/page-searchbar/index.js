'use strict';

require('angular').module('kenblog')
.component('pageSearchbar', {
  template:require('./page-searchbar.html'),
  bindings: {
    pages: '<',
    handleSelect: '<',
    searchterm: '=',
  },
});
