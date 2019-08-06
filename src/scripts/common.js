import angular from 'angular';

'use strict';
angular.module('ngApp', [])
.directive('myDirective', [function() {
    return {
        restrict: 'A',
        controller: 'myDirectiveCtrl'
    };
}])
.controller('myDirectiveCtrl', myDirectiveCtrl);


myDirectiveCtrl.$inject = ['$scope'];

function myDirectiveCtrl($scope) {
    $scope.message='Hello World';
}