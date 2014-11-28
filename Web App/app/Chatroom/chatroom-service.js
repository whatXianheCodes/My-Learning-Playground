'use strict';

var app = angular.module('chatroom');

app.factory('chatroomService', function($http) {
  	var Account = {
  		username: 'cheeeeese193',
  		firstName: 'Xianhe',
  		lastName: 'Huang',
  	};
  	var chatroomService = {
  		account: Account,
  		messages: [],
  		isSuccess: false,
  		sendMessage: function (messageBody) {
  			var message = {};
  			var that = this;
  			message.body = messageBody;
  			message.name = Account.username;
  			message.date = new Date();
  			this.messages.push(message);

  			// $http.post('Chatroom/message.json', this.messages).success(function(data, status, headers, config) {
				 //  that.isSuccess = true;
			  // }).
			  // error(function(data, status, headers, config) {
			  //   that.isSuccess = false;
			  // });
  		}
  	};
  	return chatroomService;
 });