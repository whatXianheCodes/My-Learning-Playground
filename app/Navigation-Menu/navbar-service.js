'use strict';

var app = angular.module('navigationBar');

app.factory('navbarService', ['$rootScope', function($rootScope) {
  	var navbarService = {
	  	changeTab:function (tabNumber) {
	   		$rootScope.currentTabNumber = tabNumber;
	   	},
		selectActive:function (tabNumber) {
	   		return tabNumber === $rootScope.currentTabNumber;
	   	}
  	};
  	return navbarService;
 }]);