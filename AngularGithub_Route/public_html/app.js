/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
  
  var app = angular.module("githubViewer", ["ngRoute"]);
  
  app.config(function($routeProvider){
    $routeProvider
        .when("/main", {
          templateUrl: "main.html",
          controller: "MainController"
        })
        .when("/user/:username", {
          templateUrl: "user.html",
          controller: "userController"
        })
        .when("/repo/:username/:reponame", {
          templateUrl: "repo.html",
          controller: "RepoController"
        })
        .otherwise({redirectTo:"/main"});
  });
  
})();
