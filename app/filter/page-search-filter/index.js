'use strict';

require('angular').module('kenblog')
.filter('pageSearchFilter', function (){
  return function(pages, searchTerm){
    let fuzzyRegex = genorateFuzzyRegex(searchTerm);

    return pages.filter(page => {
      return fuzzyRegex.test(page.title.toLowerCase());
    });
  };
});

function genorateFuzzyRegex(term){
  if(!term) return /.*/;
  let fuzzy = term.toLowerCase().split('').join('.*');
  return new RegExp(`.*${fuzzy}.*`);
}
