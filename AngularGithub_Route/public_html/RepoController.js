/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
  
  var module = angular.module("githubViewer");

  var RepoController = function($scope, $routeParams, github){
    
    var onRepo = function(data){
      $scope.repo = data;
    };
  
    var onError = function(reason){
      $scope.error = reason;
    };
    
    var reponame = $routeParams.reponame;
    var username = $routeParams.username;
    
    github.getRepoDetails(username, reponame)
    .then(onRepo, onError);
  };
  
  module.controller("RepoController", RepoController);
})();
