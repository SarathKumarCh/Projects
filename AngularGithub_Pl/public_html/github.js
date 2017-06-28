/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
  
  var github = function($http){
    
    var getUser = function(username){
      return $http.get("https://api.github.com/users/" + username)
              .then(function(response){
                return response.data;
              });
    };
    
    var getRepos = function(user){
      return $http.get(user.repos_url)
              .then(function(response){
                return response.data;
              });
    };
    
    return {
      getUser: getUser,
      getRepos: getRepos
    };
    
  };
  
  var module = angular.module("githubViewer");
  module.factory("github", github);
  
})();

