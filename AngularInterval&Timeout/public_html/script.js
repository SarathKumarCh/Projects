/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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

  

  Car.$inject = ['$timeout', '$interval'];

  function Car($timeout, $interval) {
    var carVm = this;
    carVm.title = 'Car Details';
    
    $timeout(function (){
      carVm.title = 'List of Car Details';
      console.log('changed');
    }, 5000);
    
    var timmer = $interval(function(){
      carVm.title = 'Details of all Cars';
      console.log('altered @ ' + new Date());
    }, 1000);
    
    //$interval.cancel(timmer+1);
    
    // console.log($rootScope);
    // $http.get('https://mocker.egen.io/users');
  }
  
  


})();
