'use strict';

/**
 * @ngdoc function
 * @name myLearningPlaygroundApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Navigation bar controller of the myLearningPlaygroundApp
 */
var app = angular.module('navigationBar', []);

app.controller('NavbarCtrl', ['$scope', 'navbarService', function($scope, navbarService) {
  $scope.currentTabNumber = 0;

  $scope.tabs = [{
  		name:'ChatRoom', 
  		url: 'chat-room',
  		tabNumber: 0
  	},
  	{
  		name: 'Tab2', 
  		url: 'tab2',
  		tabNumber: 1
  	},
  	{ 
  		name: 'Tab3',
  		url: 'tab3',
  		tabNumber: 2
  	}];
    $scope.changeTab = function (tabNumber) {
        $scope.currentTabNumber = tabNumber;
    };
    $scope.selectActive = function (tabNumber) {
      return tabNumber === $scope.currentTabNumber;
    };
}]);
