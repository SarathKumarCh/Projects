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

    self.get = getUsers;
    self.getById = getUserById;
    self.addUser = addUser;
    
    function getUsers() {
      return $http.get('http://mocker.egen.io/users')
        .then(successFn, errorFn);
        }
    
    function getUserById(id) {
      return $http.get('http://mocker.egen.io/users/' + id)
        .then(successFn, errorFn);
        }

    function addUser(data){
        return $http.post('http://mocker.egen.io/users/', data)
                .then(successFn, errorFn);
    }
    
    function successFn(response){
      return response.data;
    }
    function errorFn(error){
      return $q.reject(error);
    }
  }

})();
