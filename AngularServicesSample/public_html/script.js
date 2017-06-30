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

  angular.module('plunker')
    .service('counterService', counterService);
    
    angular.module('plunker')
    .factory('counterFactory', counterFactory);

  Car.$inject = ['counterService', 'counterFactory'];

  function Car(counterService, counterFactory) {
    var carVm = this;
    counterService.increment();
    console.dir(counterService.getCount());
    
    counterFactory.increment();
    console.dir(counterFactory.getCount());
    // console.log($rootScope);
    // $http.get('https://mocker.egen.io/users');
  }
  
  //service
  counterService.$inject = [];
  function counterService(){
    var count = 0;
    var self = this;
     self.increment = function(){
       count++;
     };
     self.getCount = function(){
       return count;
     };
     
  }
  
  //Factory
  counterFactory.$inject = [];
  function counterFactory(){
    var count = 0;
    var self = {};
     self.increment = function(){
       count++;
     };
     self.getCount = function(){
       return count;
     };
     return self;
  }


})();


