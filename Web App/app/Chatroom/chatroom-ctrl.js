'use strict';

var app = angular.module('chatroom', []);

app.controller('chatroomCtrl', ['$scope', 'chatroomService', function($scope, chatroomService) {
	var messages = [];
	$scope.messages = [];
	$scope.chatMessage = {};
	$scope.placeHolder = "Type a message here";
	$scope.sendMessage = function () {
		chatroomService.sendMessage($scope.messageBody);
	};
	if (chatroomService.isSuccess) {
		$scope.messageBody = "";
	}
}]);
