'use strict';

require('angular').module('kenblog')
.service('pageService', ['$log', '$http', 'authService', createPageService]);

function createPageService($log, $http, authService) {
  let pageService = {};

  pageService.create = (page) => {
    return authService.tokenFetch()
    .then( token => {
      let url = `${__API_URL__}/api/login`;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      };
      page.showInNav = !!page.showInNav;
      return $http.put (url, page, config);
    })
    .then(res => res.data);
  };

  pageService.fetchAll = () => {
    let url = `${__API_URL__}/api/page`;
    let config = {
      headers: {
        Accept: 'application/json',
      },
    };
    return $http.get(url, config)
    .then(res => res.data);
  };

  pageService.delete = (page) => {
    return authService.tokenFetch()
    .then(token => {
      let url = `${__API_URL__}/api/page/${page.id}`;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      return $http.delete(url, config);
    })
    .then(res => res.data);
  };
  return pageService;
}
