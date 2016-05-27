/// <reference path="angular.min.js" />

//create the Module
var myApp = angular.module("myModule", []);

//create the controller
var myController = function($scope) {
$scope.message = "AngularJS Tutorial";
}
//register controller with odel
myApp.controller("myController", myController);