'use strict';

angular.module('frontendApp')

.controller('houseSearchCtrl', function($rootScope, $scope) {
	$scope.editHouse = function(house) {
		$rootScope.goToState('edit_house');
	};
});