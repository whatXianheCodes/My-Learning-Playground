'use strict';

var app = angular.module('chatroom', []);

app.controller('chatroomCtrl', ['$scope', 'chatroomService', function($scope, chatroomService) {
	$scope.messages = [];
	$scope.chatMessage = {};
	$scope.chatMessage.name = "xianhe";
	$scope.placeHolder = "Type a message here";
}]);
