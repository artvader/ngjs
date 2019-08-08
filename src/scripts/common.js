import angular from 'angular';
import uibootstrap from '../libs/ui-bootstrap-2.5.0.js';


'use strict';
//when including module, use the original module name
angular.module('ngApp', ['ui.bootstrap'])
.directive('myDirective', [function() {
    return {
        restrict: 'A',
        controller: 'myDirectiveCtrl'
    };
}])
.controller('myDirectiveCtrl', myDirectiveCtrl);


myDirectiveCtrl.$inject = ['$scope'];

function myDirectiveCtrl($scope) {
    $scope.message='Hello Wide World';
    var _selected;

    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
}