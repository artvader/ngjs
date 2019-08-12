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
.controller('myDirectiveCtrl', myDirectiveCtrl)
.config(function($mdThemingProvider) {
  // Configure a dark theme with primary foreground yellow
  $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('yellow')
    .dark();

});


myDirectiveCtrl.$inject = ['$scope','$mdBottomSheet'];

function myDirectiveCtrl($scope,$mdBottomSheet) {
    $scope.message='Hello World';
    $scope.items = ['abc','def','ghi'];
    $scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode: '94043'
    };
    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });
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