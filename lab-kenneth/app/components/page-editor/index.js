'use strict';

require('angular').module('kenblog')
.component('pageEditor', {
  template: require('./page-editor.html'),
  bindings: {
    page: '<',
    handleSubmit: '<',
  },
});
