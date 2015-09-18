'use strict';

/**
 * @ngdoc function
 * @name wishListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wishListApp
 */
  angular.module('wishListApp')
    .controller('HomeCtrl', function($location, $scope, $routeParams, $cookieStore, $http) {

      if(!$cookieStore.get('id')){
          $location.path('/');
      }

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
          location.reload();
        }

        // $scope.goToMyList = function(id){
        //   $location.path('/mylist/'+id);
        //   location.reload();
        // }

        $scope.deleteList = function(id){
          if (window.confirm("Do you really want to delete this Wishlist ?")) {
            $http.delete("http://0.0.0.0:9292/wishlists/"+id+"/delete")
              .success(function(data){
                location.reload();
              });
          }
        }
    });
