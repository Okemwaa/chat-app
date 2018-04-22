(function() {
  "use strict";
  angular.module('chatApp')
    .directive('chat', function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/chat.html',
        controller: 'chatController'
      };
    });
}());