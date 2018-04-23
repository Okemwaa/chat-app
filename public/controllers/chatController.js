(function() {
  "use strict";
  angular.module('chatApp')
    .controller('chatController', function($scope, $firebaseObject, $firebaseArray, $timeout) {
      var ref = firebase.database().ref().child("messages");
      // Get messages in array format
      $scope.messages = $firebaseArray(ref);


      // Add messages
      $scope.addMessage = function() {
        $scope.messages.$add({
          text: $scope.newMessageText
        });
        // reset newMessageText module
        $scope.newMessageText = '';
      };
      $scope.deleteMessage = function(message) {
        $scope.messages.$remove(message).then(function() {
          $timeout(alert('Message removed', message), 1000);
        });
      };
      $scope.editMessage = function(message, index) {
        $scope.messages.$save(message);
        $scope.messages[index].edit = false;
      };
      $scope.edit = function(index) {
        $scope.messages[index].edit = true;
      };
      $scope.cancel = function(index) {
        $scope.messages[index].edit = false;
      };
    });
}());