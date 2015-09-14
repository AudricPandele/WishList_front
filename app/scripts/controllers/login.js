'use strict';

/**
 * @ngdoc function
 * @name wishListApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the wishListApp
 */

 angular.module('wishListApp')
   .controller('RegisterCtrl', function($scope, $http, $location, $routeParams, $cookieStore) {

     $scope.newUser = function(user) {
       $http.post("http://0.0.0.0:9292/users?mail="+$scope.user.mail+"&password="+$scope.user.password)
       .success(function(data){
         $cookieStore.put('id', data.id);
         $cookieStore.put('mail',data.mail);
         $location.path('/home');
       });
       $scope.idCookie = $cookieStore.get('id');
     };

     $scope.loginUser = function(user) {
       $http.post("http://0.0.0.0:9292/login?mail="+$scope.user.mail+"&password="+$scope.user.password)
       .error(function(argument) {
         alert('Bad identifiers');
       })
       .success(function(data){
         $cookieStore.put('id', data.id);
         $cookieStore.put('mail',data.mail);
         $location.path('/home');
         location.reload();
       });
       $scope.idCookie = $cookieStore.get('id');
     };

   });
