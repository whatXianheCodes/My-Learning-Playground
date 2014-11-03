'use strict';

/**
 * @ngdoc overview
 * @name myLearningPlaygroundApp
 * @description
 * # myLearningPlaygroundApp
 *
 * Main module of the application.
 */
angular
  .module('myLearningPlaygroundApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'navigationBar'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home-page.html',
        controller: 'NavbarCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      //if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
      //}
  });
