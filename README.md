
###Introduction to AngularJS

**[AngularJS](https://angularjs.org/)** is a JavaScript framework that helps build applications that run in a web browser. Google is the company that developed AngularJS. AngularJS is an open source project, which means it can be be freely used, changed, and shared by anyone. AngularJS is an excellent framework for building both Single Page Applications (SPA) and Line of Business Applications. There are many tsites hat are built with angular today.

**[Made with Angular](https://www.madewithangular.com/) 

##What are the benefits of using AngularJS
1. Dependency Injection : Dependency Injection is something AngularJS does quite well. If you are new to Dependency Injection, don't worry, we will discuss it in detail with examples in a later video.

2. Two Way Data-Binding : One of the most useful feature in AngularJS is the Two Way Data-Binding. The Two Way Data-Binding, keeps the model and the view in sync at all times, that is a change in the model updates the view and a change in the view updates the model. 

3. Testing : Testing is an area where Angular really shines. Angular is designed with testing in mind right from the start. Angular makes it very easy to test any of it's components through both unit testing and end to end testing. So there's really no excuse for not testing any of your angular application code.

4. Model View Controller : With angular it is very easy to develop applications in a clean MVC way. All you have to do is split your application code into MVC components. The rest, that is managing those components and connecting them together is done by angular.

5. Many more benefits like controlling the behaviour of DOM elements using directives and the flexibility that angular filters provide.


##Getting started with AngularJS
To build angular applications you only need one script file and that is angular.js.
To get started with angular
1. Add a reference to the angular script
2. Include ng-app attribute 

##What is ng-app 
In angular, ng-app is called a directive. There are many directives in angular. You can find the complete list of directives on https://angularjs.org. The ng prefix in the directive stands for angular. The ng-app directive is a starting point of AngularJS Application. Angular framework will first check for ng-app directive in an HTML page after the entire page is loaded. If ng-app directive is found, angular bootstraps itself and starts to manage the section of the page that has the ng-app directive. 

So the obvious next question is, where to place the ng-app directive on the page
It should be placed at the root of the HTML document, that is at the [html] tag level or at the [body] tag level, so that angular can control the entire page. 

However, there is nothing stopping you from placing it on any other HTML element with in the page. When you do this only that element and it's children are managed by angular. 

Example: All the following are valid expressions in angular
{{ 1 == 1 }} - Evaluates to true
{{ { name: 'David', age : '30' }.name }} - Returns the name property value
{{ ['Mark', 'David', 'Sara'][2] }} - Returns the 2nd element from the array  

