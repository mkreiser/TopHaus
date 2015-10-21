'use strict';

angular.module('frontendApp')

.controller('editHouseCtrl', function($rootScope, $scope) {
	$scope.saveHouse = function(house) {

		/*
		$http.post({
			url:
			data:
		}).then(function(response) {
	
		});
		 */

		$rootScope.showSimpleToast('Updated!');
		$rootScope.goToState('houses');
	};
});
