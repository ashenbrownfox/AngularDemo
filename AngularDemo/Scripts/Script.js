/// <reference path="angular.min.js" />

//create the Module
var myApp = angular.module("myModule", []);

//register controller with model
myApp.controller("myController", function ($scope) {
    var employee = {
        firstName: 'LeBron',
        lastName: 'James',
        gender: 'Male'
    };
    $scope.message = 'Hello World! ';
    $scope.employee = employee;
});