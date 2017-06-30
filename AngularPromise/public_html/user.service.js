/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
  'use strict';
  angular.module('plunker')
    .service('userService', userService);

  userService.inject = ['$q', '$http'];

  function userService($q, $http) {
    var self = this;
        
       //This is the previous way of writing promise
//    self.getUsers = function() {
//      var deferred = $q.defer();
//      $http({
//          method: 'GET',
//          url: 'http://mocker.egen.io/users'
//        })
//        .then(function(response) {
//          deferred.resolve(response.data);
//        }, function(error) {
//          console.log(error);
//        });
//      return deferred.promise;
        
       
    self.getById = getUserById;
    
//    self.deleteUser = function(){
//    return $http({
//          method: 'DELETE',
//          url: 'http://mocker.egen.io/users',
//          data: {
//              firstName: 'sarath',
//              lastName: 'kumar'
//          }
//        })
//        .then(successFn, errorFn);
//    
//    };
//    
//    self.deleteUser = function()       
//      return $http.delete('http://mocker.egen.io/users', data)
//        .then(successFn, errorFn);
//        if(response.data){
//            carVm.msg = 'Data deleted successfully'
//        }
//    };

    self.getUsers = function() {
      return $http.get('http://mocker.egen.io/users')
        .then(successFn, errorFn);
    };

    //function can be written in any(above or below) way
    
    function getUserById(id) {
      return $http.get('http://mocker.egen.io/users/' + id)
        .then(successFn, errorFn);
    }

    function successFn(response) {
      return response.data;
    }

    function errorFn(error) {
      return $q.reject(error);
    }
  }

})();