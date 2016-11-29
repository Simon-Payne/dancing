'use strict';

angular.module('myApp.what', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/what', {
    templateUrl: 'what/what.html',
    controller: 'WhatCtrl'
  });
}])

.controller('WhatCtrl', function($scope) {
  $scope.message = "Playford and American";
});
