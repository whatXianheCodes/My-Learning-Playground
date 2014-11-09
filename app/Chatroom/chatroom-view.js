'use strict';

var app = angular.module('chatroom');

app.directive('chatroomView', function() {
    return {
      restrict: 'E',
      templateUrl: 'Chatroom/chatroom.html',
      controller: 'chatroomCtrl'
    };
});