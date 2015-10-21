'use strict';

angular.module('frontendApp')

.controller('editProfileCtrl', function($http, $rootScope, $scope) {
    $scope.user = $rootScope.user;

    if (!$scope.user) {
      $scope.user = { preferences: [] };
    } else if (!$scope.user.preferences) {
      $scope.user.preferences = [];
    } 

    $scope.updateUser = function() {
      $scope.user.preferences = $scope.user.preferences.join();

      $http.post('http://localhost:8000/users/newUser/',
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
      .then(function(response) {
        $rootScope.showSimpleToast('Profile updated!');
      });
    };

    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {list.splice(idx, 1);}
      else {list.push(item);}
    };
  });
  