/// <reference path="angular.min.js" />

var demoApp = angular.module("demoApp", [])
                     .controller("demoController", function 
                         ($scope,$http, $location, $anchorScroll) {
                         $scope.scrollTo = function (scrollLocation) {
                             $location.hash(scrollLocation);
                             $anchorScroll.yOffset = 20;
                             $anchorScroll();
                         }
                     });
