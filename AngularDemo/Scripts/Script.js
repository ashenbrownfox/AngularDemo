/// <reference path="angular.min.js" />

//create the Module
var myApp = angular.module("myModule", []);

//register controller with model
myApp.controller("myController", function ($scope) {
    var employee = {
        firstName: 'Klay',
        lastName: 'Thompson',
        gender: 'Male'
    };
    //$scope.message = 'Hello World! ';
    $scope.employee = employee;
    var country = {
        name: "USA",
        capital: "D.C",
        flag: "/Images/Klay-Thompson-2.jpg"
    };
    $scope.country = country;
    $scope.message = "Two way data binding!";
    $scope.greeting = "Hello Angular!"
});
