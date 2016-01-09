'use strict';

describe('Controller: houseSearchCtrl', function() {
	beforeEach(module('frontendApp'));

	var createNullController, createFullController;
	var controller, deferredGet;
	var $http, $rootScope, scope;

	beforeEach(inject(function($controller, _$http_, $q, _$rootScope_) {
		$http = _$http_;
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();

		$rootScope.serverHost = 'host/';
		$rootScope.showSimpleToast = function() {};
		$rootScope.goToState = function() {};

		$rootScope.match = undefined;

		deferredGet = $q.defer();

		spyOn($http, 'get').and.returnValue(deferredGet.promise);
		spyOn($rootScope, 'goToState');
		spyOn($rootScope, 'showSimpleToast');

		createNullController = function() {
			return $controller('houseSearchCtrl', {
				$scope: scope
			});
		};

		createFullController = function() {
			return $controller('houseSearchCtrl', {
				$scope: scope,
				$rootScope: {
					match: {
						budget: 1000,
						style: 'some,style',
						user_amenity: {
							amenity1: true,
							amenity2: true
						}
					}
				}
			});
		};
	}));

	it('should set scope.search to an empty object', function() {
		controller = createNullController();
		expect(scope.search).toEqual({});
	});

	it('should set scope.amenity to an empty object', function() {
		controller = createNullController();
		expect(scope.amenity).toEqual({});
	});

	it('should not set scope.disableFilters', function() {
		controller = createNullController();
		expect(scope.disableFilters).toBe(undefined);
	});

	describe('$rootScope.match is defined', function() {
		beforeEach(function() {
			controller = createFullController();
		});

		it('should disable the filters', function() {
			expect(scope.disableFilters).toBeTruthy();
		});

		it('should set search.max_price to match.budget', function() {
			expect(scope.search.max_price).toEqual(1000);
		});

		it('should set search.style to the first result of match.style', function() {
			expect(scope.search.style).toEqual('some');
		});

		it('should set the amenities to true', function() {
			expect(scope.amenity).toEqual({
				amenity1: true,
				amenity2: true
			});
		});

		it('should undefine $rootScope.match once it is done processing', function() {
			expect($rootScope.match).toBe(undefined);
		});
	});
});
