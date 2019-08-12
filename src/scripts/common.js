import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';
import angularMaterial from 'angular-material';

'use strict';
angular.module('ngApp', ['ngMaterial', 'ngMessages'])
.directive('myDirective', [function() {
    return {
        restrict: 'A',
        controller: 'myDirectiveCtrl'
    };
}])
.controller('myDirectiveCtrl', myDirectiveCtrl);


myDirectiveCtrl.$inject = ['$scope','$mdBottomSheet'];

function myDirectiveCtrl($scope,$mdBottomSheet) {
    $scope.message='Hello World';
    $scope.items = ['abc','def','ghi'];
    $scope.showListBottomSheet = function() {
        $scope.alert = '';
        $mdBottomSheet.show({
          templateUrl: 'bottom-sheet-list-template.html'
        }).then(function(clickedItem) {
          $scope.alert = clickedItem['name'] + ' clicked!';
        }).catch(function(error) {
          // User clicked outside or hit escape
        });
      };
}