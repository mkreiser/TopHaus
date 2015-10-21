'use strict';

angular.module('frontendApp')

.controller('houseOverviewCtrl', function($http, $rootScope, $scope) {
    $scope.searchForHouse = function(search) {
    	
    	$http.get(
        'http://localhost:8000/houses/?format=json&location=' + search
      )
      .success(function(response) {
        if (!response.data.length) {
          $rootScope.showSimpleToast('No results!');
        } else {
          $rootScope.searchResults = response.data;
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
    	).then(function(response) {
       $rootScope.showSimpleToast('Added a house!');
    	});
    };
  });
