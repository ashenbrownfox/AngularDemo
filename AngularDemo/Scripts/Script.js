/// <reference path="angular.min.js" />

//create the Module
var myApp = angular.module("myModule", []);

//register controller with model
myApp.controller("myController", function ($scope) {
    var player = {
        firstName: 'Klay',
        lastName: 'Thompson',
        gender: 'Male'
    };
    var country = {
        name: "USA",
        capital: "D.C",
        flag: "/Images/Klay-Thompson-2.jpg"
    };
    var employees = [
        { firstName: "Kobe", lastName: "Bryant", gender: "Male", salary: 55000, likes: 0, dislikes: 0 },
        { firstName: "LeBron", lastName: "James", gender: "Male", salary: 85000, likes:0, dislikes: 0 },
        { firstName: "Kevin", lastName: "Durant", gender: "Male", salary: 75000, likes: 0, dislikes: 0 },
        { firstName: "Russell", lastName: "Westbrook", gender: "Male", salary: 60000, likes: 0, dislikes: 0 },
        { firstName: "Steph", lastName: "Curry", gender: "Female", salary: 65000, likes: 0, dislikes: 0 },
        { firstName: "Klay", lastName: "Thompson", gender: "Female", salary: 56000, likes: 0, dislikes: 0 },
        { firstName: "Draymond", lastName: "Green", gender: "Male", salary: 49000, likes: 0, dislikes: 0 }
    ];
    $scope.employees = employees;
    $scope.incrementLikes = function(employees) {
        employees.likes++;
    };
    $scope.incrementDislikes = function (employees) {
        employees.dislikes++;
    };
    $scope.player = player;
    $scope.country = country;
    $scope.rowLimit = 7;
    $scope.sortColumn = "name";
    $scope.message = "Two way data binding!";
    $scope.greeting = "Hello Angular!"
});
