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

    self.getUsers = function() {
      var deferred = $q.defer();

      $http({
          method: 'GET',
          url: 'http://mocker.egen.io/users'
        })
        .then(function(response) {

          deferred.resolve(response.data);

        }, function(error) {
          console.log(error);
        });

      return deferred.promise;
    };
  }

})();