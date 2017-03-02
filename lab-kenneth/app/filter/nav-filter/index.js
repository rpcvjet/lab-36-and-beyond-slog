'use strict';

require('angular').module('kenblog')
.filter('navFilter', function(){
  return function(pages) {
    return pages.filter(p => p.showInNav);
  };
});
