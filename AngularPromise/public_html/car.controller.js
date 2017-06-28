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

    carVm.user = userService.getUsers()
      .then(function(response) {
        console.log(response);
      }, function(error) {
        console.err(error);
      });
    console.log(carVm.user);

    //$interval.cancel(timmer+1);

    // console.log($rootScope);
    // $http.get('https://mocker.egen.io/users');
  }
})();

