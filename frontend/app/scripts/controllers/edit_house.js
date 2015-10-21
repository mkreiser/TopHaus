'use strict';

angular.module('frontendApp')

.controller('editHouseCtrl', function($rootScope, $scope) {
	$scope.saveHouse = function(house) {

		$http.put(
			'http://localhost:8000/houses/newHouse/',
			{
			  	"location": house.location,
			    "exact_cost": house.cost,
			    "number_of_people": house.roommates,
			    "style": house.style
			}
    	).then(function(response) {
       $rootScope.showSimpleToast('Added a house!');
    	});

		$rootScope.showSimpleToast('Updated!');
		$rootScope.goToState('houses');
	};
});
