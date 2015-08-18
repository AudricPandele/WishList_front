'use strict';

/**
 * @ngdoc function
 * @name wishListApp.controller:CreatewishlistCtrl
 * @description
 * # CreatewishlistCtrl
 * Controller of the wishListApp
 */

angular.module('wishListApp')
  .controller('CreatewishlistCtrl', function ($scope, $http, $location, $routeParams, $cookieStore) {
    var idCookie = $cookieStore.get('id');

    $scope.newWishlist = function(wishlist) {
      $http.post("http://0.0.0.0:9292/wishlists?title="+$scope.wishlist.title+"&description="+$scope.wishlist.description+"&owner_id="+idCookie)
      .success(function(data){
        // $cookieStore.put('id', data.id);
        // $cookieStore.put('email',data.mail);
        // $cookieStore.put('user', data.user_name);
        $location.path('/home');
      });
    };
  });
