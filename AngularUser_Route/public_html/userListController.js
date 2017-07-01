/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
  'user strict';
  
  angular.module('plunker')
  .controller('UserListController', UserListController);
  
  UserListController.$inject = ['userService'];
  function UserListController(userService){
    var userListVm = this;
    
    userService.get()
      .then(function(users){
        userListVm.users = users;
        console.log(users);
      }, function(error){
        console.log(error);
      });
  }
  
})();
