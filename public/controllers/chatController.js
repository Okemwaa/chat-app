(function() {
  "use strict";
  angular.module('chatApp')
    .controller('chatController', function($scope) {
      $scope.sendMessage = function() {
        alert($scope.name);
      };
    });
}());