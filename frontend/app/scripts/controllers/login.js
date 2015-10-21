'use strict';

angular.module('frontendApp')

.controller('loginCtrl', function($rootScope, $scope) {
    
    // Log a user in
    $scope.login = function() {
      $rootScope.user = $scope.user;
       
      $http.get({
        url: 'localhost:8000/users/?name=' + $scope.user.name
      })
      .then(function(response) {
        console.log(response);
      });
      
        
      $rootScope.goToState('overview');
    };

    $scope.signup = function() {
      $rootScope.user = $scope.user;
      $rootScope.goToState('edit_profile');
    };
  });
