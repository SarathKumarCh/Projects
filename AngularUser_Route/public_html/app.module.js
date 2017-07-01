/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
  'use strict';
  angular.module('plunker', ['ngRoute']);
  
  angular.module('plunker')
      .config(moduleConfig);
      
  moduleConfig.$inject = ['$routeProvider'];
  
  function moduleConfig($routeProvider) {
     $routeProvider
     .when('/users', {
       templateUrl: 'usersList.html',
       controller: 'UserListController',
       controllerAs: 'userListVm'
     })
     .when('/users/:id', {
       templateUrl: 'userDetail.html',
       controller: 'UserDetailController',
       controllerAs: 'userDetailVm'
     })
     .when('/add-user', {
       templateUrl: 'addUser.html',
       controller: 'addUserController',
       controllerAs: 'addUserVm'
     })
     .otherwise({
       rediretTo: '/users'
     });
  }
  
})();

