/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
  'user strict';
  
  angular.module('plunker')
  .controller('UserDetailController', UserDetailController);
  
  UserDetailController.$inject = ['userService', '$routeParams'];
  function UserDetailController(userService, $routeParams){
    var userDetailVm = this;
    
    //console.log($routeParams);
    userService.getById($routeParams.id)
      .then(function(user){
        userDetailVm.user = user;
        console.log(userDetailVm.user);
      }, function(error){
        console.log(error);
      });
  }
  
})();
