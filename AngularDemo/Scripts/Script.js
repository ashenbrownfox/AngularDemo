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
        { firstName: "Kobe", lastName: "Bryant", dob: new Date("August 28, 1978"), gender: "Male", salary: 55000, likes: 0, dislikes: 0 },
        { firstName: "LeBron", lastName: "James", dob: new Date("December 30, 1984"), gender: "Male", salary: 85000, likes:0, dislikes: 0 },
        { firstName: "Kevin", lastName: "Durant", dob: new Date("September 29, 1988"),gender: "Male", salary: 75000, likes: 0, dislikes: 0 },
        { firstName: "Russell", lastName: "Westbrook", dob: new Date("November 12, 1988"), gender: "Male", salary: 60000, likes: 0, dislikes: 0 },
        { firstName: "Steph", lastName: "Curry", dob: new Date("March 14, 1988"), gender: "Female", salary: 65000, likes: 0, dislikes: 0 },
        { firstName: "Klay", lastName: "Thompson", dob: new Date("February 8, 1990"), gender: "Female", salary: 56000, likes: 0, dislikes: 0 },
        { firstName: "Draymond", lastName: "Green", dob: new Date("March 4, 1990"), gender: "Male", salary: 49000, likes: 0, dislikes: 0 },
        { firstName: "Steven", lastName: "Adams", dob: new Date("July 20, 1993"), gender: "Male", salary: 38000, likes: 0, dislikes: 0 }
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
    $scope.rowLimit = 10;
    $scope.sortColumn = "salary";

    $scope.reverseSort = false;
    $scope.sortData = function () {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false
        $scope.sortColumn = column;
    }
    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
        }
        return '';
    }
    $scope.message = "Two way data binding!";
    $scope.greeting = "Hello Angular!"
});
