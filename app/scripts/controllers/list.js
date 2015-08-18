'use strict';

/**
 * @ngdoc function
 * @name wishListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wishListApp
 */
  angular.module('wishListApp')
    .controller('ListCtrl', function($scope, $routeParams, $cookieStore, $http) {

      $http.get("http://0.0.0.0:9292/wishlists/"+$routeParams.id)
        .success(function(data){
          $cookieStore.put('list_id', data.id);
          $scope.wishlist = data;
        });

      $scope.idListCookie = $cookieStore.get('list_id');

      $http.get("http://0.0.0.0:9292/wishlistslinks/wishlist_id/"+$scope.idListCookie)
        .success(function(data){
          $scope.wishlistlinks = data;

        });

    });
