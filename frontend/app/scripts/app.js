'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html'
      })
      .when('/houses', {
        templateUrl: 'views/overview_houses.html'
      })
      .when('/house_search', {
        templateUrl: 'views/house_search.html'
      })
      .when('/edit_profile', {
        templateUrl: 'views/signup.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('appCtrl', function($location, $mdToast, $rootScope) {
    $rootScope.goToState = function(state) {
      $location.path(state);
    };

    $rootScope.showSimpleToast = function() {
      $mdToast.show(
        $mdToast.simple()
          .content('Added a house!')
          .position('top right')
          .hideDelay(2000)
      );
    };
  });
