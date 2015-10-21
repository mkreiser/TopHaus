'use strict';

angular.module('frontendApp')

.controller('houseOverviewCtrl', function($http, $rootScope, $scope) {
    $scope.searchForHouse = function(search) {
    	
    	$http.get(
        'http://localhost:8000/houses/?format=json&location=' + search
      )
      .success(function(response) {
        if (!response.length) {
          $rootScope.showSimpleToast('No results!');
        } else {
          $rootScope.searchResults = response;
          $rootScope.goToState('house_search');
        }
    	});
    };

    $scope.listHouse = function(house) {
    	$http.post(
				'http://localhost:8000/houses/newHouse/',
				{
          	"location": house.location,
            "exact_cost": house.cost,
            "number_of_people": house.roommates,
            "style": house.style
				}
    	).success(function() {
       $rootScope.showSimpleToast('Added a house!');
       $rootScope.goToState('/houses');
    	});
    };
  });
