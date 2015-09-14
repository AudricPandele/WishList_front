'use strict';

/**
 * @ngdoc function
 * @name wishListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wishListApp
 */

  angular.module('wishListApp')
    .controller('PublicListCtrl', function($scope, $routeParams, $http) {

      $scope.order = function (id) {
          $http.put("http://0.0.0.0:9292/wishlistslinks/"+id+"?ordered=true")
          .success(function(data){
            location.reload();
          });
      }

      $http.get("http://0.0.0.0:9292/wishlists/owner_id/"+$routeParams.id)
        .success(function(data){
          $scope.wishlist = data[0];
        });


      $http.get("http://0.0.0.0:9292/wishlistslinks/wishlist_id/"+$routeParams.list_id)
        .success(function(data){
          $scope.wishlistlinks = data;

        });


    });
