'use strict';

/**
 * @ngdoc function
 * @name myLearningPlaygroundApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Navigation bar controller of the myLearningPlaygroundApp
 */
var app = angular.module('navigationBar', []);

app.controller('NavbarCtrl', ['$scope', function($scope) {
  $scope.tabNames = ['Tab1', 'Tab2', 'Tab3'];
}]);
