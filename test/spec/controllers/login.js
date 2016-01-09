'use strict';

describe('Controller: loginCtrl', function() {
	beforeEach(module('frontendApp'));

	var controller, deferredGet;
	var $http, $rootScope, scope;

	beforeEach(inject(function($controller, _$http_, $q, _$rootScope_) {
		$http = _$http_;
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();

		$rootScope.user = { id: 'id' };

		$rootScope.serverHost = 'host/';
		$rootScope.showSimpleToast = function() {};
		$rootScope.goToState = function() {};

		deferredGet = $q.defer();

		spyOn($http, 'get').and.returnValue(deferredGet.promise);
		spyOn($rootScope, 'goToState');
		spyOn($rootScope, 'showSimpleToast');

		controller = $controller('loginCtrl', {
			$scope: scope
		});
	}));

	describe('$scope.signup', function() {
		it('should toast if the user is not defined', function() {
			scope.user = undefined;
			scope.signup();

			expect($rootScope.showSimpleToast).toHaveBeenCalledWith('Invalid user');
		});

		it('should toast if the user name is not defined', function() {
			scope.user = {};
			scope.signup();

			expect($rootScope.showSimpleToast).toHaveBeenCalledWith('Invalid user');
		});

		it('should toast if the user password is not defined', function() {
			scope.user = { name: 'name' };
			scope.signup();

			expect($rootScope.showSimpleToast).toHaveBeenCalledWith('Invalid user');
		});

		it('should assign rootScope.user from scope.user', function() {
			scope.user = { name: 'name', password: 'password' };
			scope.signup();

			expect($rootScope.user).toBe(scope.user);
		});

		it('should go to signup page', function() {
			scope.user = { name: 'name', password: 'password' };
			scope.signup();

			expect($rootScope.goToState).toHaveBeenCalledWith('signup');
		});
	});
});
