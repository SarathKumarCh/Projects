/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Code goes here

(function() {
  'use strict';

  angular.module('plunker', []);

  angular.module('plunker')
    .run(function($rootScope) {
      console.log('Initiated');
      $rootScope.appName = 'User details';
    });

  angular.module('plunker')
    .controller('CarController', Car);

  

  Car.$inject = ['$http'];

  function Car($http) {
    var carVm = this;
    
    $http({
      method:'POST',
      url: 'http://mocker.egen.io/users',
      data: {
          
          firstName: 'sarath',
          lastName: 'kumar'
      }
    })
    .then(function(response){
      console.log(response);
    },function(error){
      console.log(error);
    });
    
    
    //$interval.cancel(timmer+1);
    
    // console.log($rootScope);
    // $http.get('https://mocker.egen.io/users');
  }
  
  


})();

