(function () {
  'use strict';

angular
    .module('thinkster.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    //$routeProvider.when('/register', {
    //  controller: 'RegisterController',
    //  controllerAs: 'vm',
    //  templateUrl: '/static/templates/authentication/register.html'
    //}).when('/login', {
    //  controller: 'LoginController',
    //  controllerAs: 'vm',
    //  templateUrl: '/static/templates/authentication/login.html'
    //}).when('/', {
    //  controller: 'IndexController',
    //  controllerAs: 'vm',
    //  templateUrl: '/static/templates/layout/index.html'
    //})
    //.otherwise('/');
      $routeProvider.when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/layout/index.html'
    }).when('/register', {
      controller: 'RegisterController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).when('/+:username', {
      controller: 'AccountController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/accounts/account.html'
    }).when('/+:username/settings', {
      controller: 'AccountSettingsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/accounts/settings.html'
    }).when('/+:username', {
      controller: 'ProfileController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/profiles/profile.html'
    }).when('/+:username/settings', {
      controller: 'ProfileSettingsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/profiles/settings.html'
    })
      .otherwise('/');
  }
})();