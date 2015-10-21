'use strict';

angular.module('frontendApp')

.controller('editProfileCtrl', function($http, $rootScope, $scope) {
    $scope.user = $rootScope.user;

    var updatePreferences = function() {
      if (!$scope.user) {
        $scope.user = { preferences: [] };
      } else if (!$scope.user.preferences) {
        $scope.user.preferences = [];
      } else if (typeof $scope.user.preferences === 'string') {
        $scope.user.preferences = $scope.user.preferences.split(',');
      }
    };

    updatePreferences();

    $scope.user.roommates = $scope.user["number_of_roommates"];
    $scope.user.staylength = $scope.user["length_of_stay"];

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
      .success(function(response) {
        $rootScope.user = response;
        updatePreferences();

        $rootScope.showSimpleToast('Profile updated!');
      });
    };

    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {list.splice(idx, 1);}
      else {list.push(item);}
    };
    $scope.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };
  });
  