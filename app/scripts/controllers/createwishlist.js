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
    if(!$cookieStore.get('id')){
        $location.path('/');
    }

    var idCookie = $cookieStore.get('id');

    $scope.newWishlist = function(wishlist) {
      if ($scope.wishlist.title != null) {
        $http.post("http://0.0.0.0:9292/wishlists?title="+$scope.wishlist.title+"&description="+$scope.wishlist.description+"&owner_id="+idCookie)
        .success(function(data){
          $location.path('/home');
        });
      }else {
        Materialize.toast('Please provide a title', 4000);
      }
    };
  });
