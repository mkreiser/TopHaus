'use strict';

angular.module('frontendApp')

.controller('loginCtrl', function($http, $rootScope, $scope) {
    // Log a user in
    $scope.login = function() {
      $http.get($rootScope.serverHost + 'users?&name=' + $scope.user.name)
      .then(function(response) {
        if (response.data.length !== 1) {
          $rootScope.showSimpleToast('Invalid Login');
        } else {
          $rootScope.showSimpleToast('Welcome!');
          $rootScope.user = response.data[0];

          $rootScope.goToState('overview');
        }
      });
    };

    $scope.signup = function() {
      $rootScope.user = $scope.user;
      $rootScope.goToState('signup');
    };
  });
