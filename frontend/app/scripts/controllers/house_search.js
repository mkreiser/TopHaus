'use strict';

angular.module('frontendApp')

.controller('houseSearchCtrl', function($rootScope, $scope) {
	$scope.editHouse = function(houseId) {
		$rootScope.editHouseId = houseId;
		$rootScope.goToState('edit_house');
	};

	$scope.deleteHouse = function(houseId) {
		$http.delete(
			'http://localhost:8000/houses/deleteHouse/' + houseId + '/'
		).success(function() {
			$rootScope.showSimpleToast('House deleted!');
			$rootScope.goToState('houses');
		});
	}
});