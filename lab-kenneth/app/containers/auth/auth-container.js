'use strict';

const angular = require('angular');

angular.module('kenblog')
.component('auth', {
  template:`
  <div class="auth">
  <login user="$ctrl.loginUser" handle-submit="$ctrl.loginHandleSubmit">
  </login>
  </div>
  `,
  controller: ['$log', 'authService', '$location', AdminController],
});

function AdminController($log, authService, $location) {
  this.$onInit = () => {
    console.log('kdjvbdkhfbvkdhfvb');
    authService.tokenFetch()
    .then(() => $location.path('/dashboard'));
    this.loginUser = {email: '', password: ''};
    this.loginHandleSubmit = (user) => {
      authService.login(user)
      .then(token => {
        $log.log('login worked', token);
        this.loginUser = {email:'', password:''};
        $location.path('/dashboard');
      })
      .catch($log.error);
    };
  };
}
