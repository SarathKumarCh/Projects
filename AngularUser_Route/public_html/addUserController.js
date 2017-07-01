/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    'use strict';
    
    angular.module('plunker')
            .controller('addUserController', addUserController);
    
    addUserController.$inject = ['userService'];
    
    function addUserController(userService){
        var addUserVm = this;
        
        addUserVm.addUser = function (){
            
            var data = addUserVm.newUser;
            
            userService.addUser(data)
                .then(function(user){
                    addUserVm.user = user;
                    console.log(user);
            }, function(error){
                    console.log(error);
            });
        };
    }
    
})();

