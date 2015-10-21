'use strict';

angular.module('frontendApp')

.controller('houseSearchCtrl', function($rootScope, $scope) {
	$scope.editHouse = function(house) {
		$rootScope.editHouseId = house;
		$rootScope.goToState('edit_house');
	};
});