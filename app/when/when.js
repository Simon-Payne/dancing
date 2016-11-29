'use strict';

angular.module('myApp.when', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/when', {
    templateUrl: 'when/when.html',
    controller: 'WhenCtrl'
  });
}])

.controller('WhenCtrl', function($scope) {
  $scope.times = "every other Friday";
});
