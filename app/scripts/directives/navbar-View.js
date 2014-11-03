'use strict';

var app = angular.module('navigationBar');

app.directive('navbarView', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/navbar.html',
      controller: 'NavbarCtrl'
    };
});