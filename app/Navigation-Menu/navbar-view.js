'use strict';

var app = angular.module('navigationBar');

app.directive('navbarView', function() {
    return {
      restrict: 'E',
      templateUrl: 'Navigation-Menu/navbar.html',
      controller: 'NavbarCtrl'
    };
});