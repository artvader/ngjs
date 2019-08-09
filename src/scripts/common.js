import angular from 'angular';
import uibootstrap from '../libs/ui-bootstrap-2.5.0.js';


'use strict';
// when including module, use the original module name
angular.module('ngApp', ['ui.bootstrap'])
.directive('myDirective', [
    function () {
        return {restrict: 'A', controller: 'myDirectiveCtrl'};
    }
])
.directive('carousel', [
    function () {
        return {restrict: 'A', controller: 'carouselCtrl'};
    }
])
.controller('myDirectiveCtrl', myDirectiveCtrl)
.controller('carouselCtrl', carouselCtrl);


myDirectiveCtrl.$inject = ['$scope'];
carouselCtrl.$inject = ['$scope'];

function myDirectiveCtrl($scope) {
    $scope.message = 'Hello Wide World';
    var _selected;

    $scope.selected = undefined;
    $scope.states = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Dakota',
        'North Carolina',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
    ];

    $scope.rate = 0;
    $scope.max = 5;
    $scope.isReadonly = false;


    

}

function carouselCtrl($scope) {
// Carousel
$scope.myInterval = 5000;
$scope.noWrapSlides = false;
$scope.active = 0;
var slides = $scope.slides = [];
var currIndex = 0;

$scope.addSlide = function () {
    var newWidth = 600 + slides.length + 1;
    slides.push({
        image: '//unsplash.it/' + newWidth + '/300',
        text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
        id: currIndex++
    });
};

$scope.randomize = function () {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
};

for (var i = 0; i < 4; i++) {
    $scope.addSlide();
}

// Randomize logic below

function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
        slides[i].id = indexes.pop();
    }
}

function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++ i) {
        indexes[i] = i;
    }
    return shuffle(indexes);
}
function shuffle(array) {
    var tmp,
        current,
        top = array.length;

    if (top) {
        while (-- top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    }

    return array;
}
}
