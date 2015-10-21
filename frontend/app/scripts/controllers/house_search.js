'use strict';

angular.module('frontendApp')

.controller('houseSearchCtrl', function($rootScope, $scope) {
	$scope.editHouse = function(house) {
		console.log(house);
		$rootScope.goToState('edit_house');
	};
});