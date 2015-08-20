'use strict';

/**
 * @ngdoc function
 * @name wishListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wishListApp
 */
  angular.module('wishListApp')
    .controller('MainCtrl', function($location, $scope, $routeParams, $cookieStore, $http) {
      $scope.idCookie = $cookieStore.get('id');

      $http.get("http://0.0.0.0:9292/wishlists/owner_id/"+$scope.idCookie)
        .success(function(data){
          $scope.wishlist = data;
        });

        $scope.logout = function(){
          $cookieStore.remove('id');
          $cookieStore.remove('mail');
          $cookieStore.remove('list_id');
          $cookieStore.remove('user_name');
          $location.path('/');
        }

        $scope.deleteList = function(id){
          if (window.confirm("Do you really want to delete this Wishlist ?")) {
            $http.delete("http://0.0.0.0:9292/wishlists/"+id+"/delete")
              .success(function(data){
                alert('Supprimé');
                location.reload();
              });
          }
        }
    });
