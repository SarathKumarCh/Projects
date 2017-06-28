/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
  'use strict';
  angular.module('plunker')
    .controller('CarController', Car);

  Car.$inject = ['userService'];

  function Car(userService) {
    var carVm = this;

    userService.getUsers()
      .then(function(response) {
        console.log(response);
      }, function(error) {
        console.err(error);
      });
    
    userService.getById('cba42480-057a-45aa-9914-f1a89fc735f5')
    .then(function(response){
      console.log(response);
    }, function(error){
      console.log(error);
    });

    //$interval.cancel(timmer+1);

    // console.log($rootScope);
    // $http.get('https://mocker.egen.io/users');
  }
})();

