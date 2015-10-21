'use strict';

angular.module('frontendApp')

.controller('editProfileCtrl', function($http, $rootScope, $scope) {
    $scope.user = $rootScope.user;

    if (!$scope.user) {
      $scope.user = { preferences: [] };
    } else if (!$scope.user.preferences) {
      $scope.user.preferences = [];
    } else {
      $scope.user.preferences = $scope.user.preferences.split(',');
    }

    $scope.updateUser = function() {
      $scope.user.preferences = $scope.user.preferences.join();

      $http.put('http://localhost:8000/users/updateUser/' + $rootScope.user.id + '/',
        {
          "name": $scope.user.name,
          "gender": $scope.user.gender,
          "budget": $scope.user.budget,
          "number_of_roommates": $scope.user.roommates,
          "style": $scope.user.style,
          "location": $scope.user.location,
          "type_of_time": "D",
          "length_of_stay": $scope.user.staylength,
          "preferences": $scope.user.preferences,
          "company": $scope.user.company
        }
      )
      .success(function() {
        $rootScope.showSimpleToast('Profile updated!');
      });
    };

    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {list.splice(idx, 1);}
      else {list.push(item);}
    };
  });
  