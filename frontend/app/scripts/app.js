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
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html'
      })
      .when('/houses', {
        templateUrl: 'views/overview_houses.html',
        controller: 'houseOverviewCtrl'
      })
      .when('/house_search', {
        templateUrl: 'views/house_search.html',
        controller: 'houseSearchCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'signupCtrl'
      })
      .when('/edit_profile', {
        templateUrl: 'views/edit_profile.html',
        controller: 'editProfileCtrl'
      })
      .when('/edit_house', {
        templateUrl: 'views/edit_house.html',
        controller: 'editHouseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('appCtrl', function($location, $mdToast, $rootScope) {

    // Check if the user is logged in
    if (!$rootScope.user) {
      $location.path('/');
    }

    // Change pages
    $rootScope.goToState = function(state) {
      if (!$rootScope.user) {
        $location.path('/');
      } else {
        $location.path(state);
      }
    };

    // Show a toast with input text
    $rootScope.showSimpleToast = function(text) {
      $mdToast.show(
        $mdToast.simple()
          .content(text || 'Toast!')
          .position('top right')
          .hideDelay(2000)
      );
    };

    $rootScope.logout = function() {
      $rootScope.user = null;
      $rootScope.goToState('/');
    };
  });
