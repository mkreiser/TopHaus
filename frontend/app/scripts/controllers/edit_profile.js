'use strict';

angular.module('frontendApp')

.controller('editProfileCtrl', function($rootScope, $scope) {
    $scope.user = $rootScope.user;

    if (!$scope.user) {
      $scope.user = { preferences: [] };
    } else if (!$scope.user.preferences) {
      $scope.user.preferences = [];
    } 

    $scope.updateUser = function() {
      $scope.user.preferences = $scope.user.preferences.join();
      $rootScope.user = $scope.user;

      $rootScope.showSimpleToast('Profile updated!');
    };

    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {list.splice(idx, 1);}
      else {list.push(item);}
    };
  });
  