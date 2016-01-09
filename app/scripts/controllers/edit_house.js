'use strict';

angular.module('frontendApp')

.controller('editHouseCtrl', function($http, $rootScope, $scope) {

	$http.get(
		$rootScope.serverHost + 'houses/getHouse/' + $rootScope.editHouseId + '/'
		).success(function(response) {
			$scope.house = response;
			$scope.house.cost = $scope.house['exact_cost'];
			$scope.house.roommates = $scope.house['number_of_people'];
		});

	$scope.saveHouse = function(house) {

		$http.put(
			$rootScope.serverHost + 'houses/updateHouse/' + $rootScope.editHouseId + '/',
			{
			  	"location": house.location,
			    "exact_cost": house.cost,
			    "number_of_people": house.roommates,
			    "style": house.style
			}
    ).success(function() {
       $rootScope.showSimpleToast('Added a house!');
       $rootScope.goToState('houses');
    });
	};
});