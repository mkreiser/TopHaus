'use strict';

angular.module('frontendApp')

.controller('loginCtrl', function($http, $rootScope, $scope) {
    // Log a user in
    $scope.login = function() {

      if (!$scope.user || !$scope.user.name || !$scope.user.password) {
        $rootScope.showSimpleToast('Invalid login');
        return;
      }

      $http
        .get($rootScope.serverHost + 'users?&name=' + $scope.user.name)
        .then(function(response) {
          if (response.data.length !== 1) {
            $rootScope.showSimpleToast('Invalid login');
          } else {
            $rootScope.showSimpleToast('Welcome!');
            $rootScope.user = response.data[0];

            $rootScope.goToState('overview');
          }
        });
    };

    $scope.signup = function() {
      if (!$scope.user || !$scope.user.name || !$scope.user.password) {
        $rootScope.showSimpleToast('Invalid user');
        return;
      }

      $rootScope.user = $scope.user;
      $rootScope.goToState('signup');
    };
  });
