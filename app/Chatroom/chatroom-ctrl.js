'use strict';

var app = angular.module('chatroom', []);

app.controller('chatroomCtrl', ['$scope', 'chatroomService', function($scope, chatroomService) {
	var that = this;
	var messages = [];
	$scope.messages = [];
	$scope.chatMessage = {};
	$scope.placeHolder = "Type a message here";
	$scope.sendMessage = function () {
		$scope.chatMessage.name = "xianhe";
		messages.push($scope.chatMessage);
		$scope.chatMessage = {};
		$scope.messages = messages;
	}
}]);
