'use strict';

angular.module('frontendApp')

.controller('loginCtrl', function($http, $rootScope, $scope) {
    
    // Log a user in
    $scope.login = function() {
      $http.get('http://localhost:8000/users/?format=json&name=' + $scope.user.name)
      .then(function(response) {
        if (!response.data.length) {
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
