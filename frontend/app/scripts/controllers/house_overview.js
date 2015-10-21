'use strict';

angular.module('frontendApp')

.controller('houseOverviewCtrl', function($rootScope, $scope) {
    $scope.searchForHouse = function(search) {
    	/*
    	$http.post({
				url:
				data: {
	
				}
    	}).then(function() {
	
    	});
    	 */
      
      $rootScope.goToState('house_search');
    };

    $scope.listHouse = function(house) {
      /*
    	$http.post({
				url:
				data: {
	
				}
    	}).then(function() {
	
    	});
    	 */
      $rootScope.showSimpleToast('Added a house!');
    };
  });
