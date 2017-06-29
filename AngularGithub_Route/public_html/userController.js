/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {


  var app = angular.module("githubViewer");

  var userController = function($scope, github, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;

    };

    var onError = function(reason) {
      $scope.error = "coudn't fetch data";
    };

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers-count";
    github.getUser($scope.username)
      .then(onUserComplete, onError);

  };

  app.controller("userController", userController);

})();