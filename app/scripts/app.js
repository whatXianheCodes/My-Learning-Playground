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
    'navigationBar',
    'chatroom'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home-page.html',
        controller: 'NavbarCtrl'
      })
      .when('/chat-room', {
        templateUrl: 'views/chat-room.html',
        controller: 'chatroomCtrl'
      });
      // .otherwise({
      //   redirectTo: '/'
      // });
  });
