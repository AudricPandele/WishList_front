'use strict';

/**
 * @ngdoc function
 * @name wishListApp.controller:CreatewishlistCtrl
 * @description
 * # CreatewishlistCtrl
 * Controller of the wishListApp
 */

angular.module('wishListApp')
  .controller('AddWishListlinkCtrl', function ($scope, $http, $location, $routeParams, $cookieStore) {
    if(!$cookieStore.get('id')){
        $location.path('/');
    }

    $scope.newWishlistlink = function(wishlistlink) {
      if ($scope.wishlistlink.link != null) {
        $http.post("http://0.0.0.0:9292/wishlistslinks?link="+$scope.wishlistlink.link+"&wishlist_id="+$cookieStore.get('list_id'))
        .success(function(data){
          $location.path('/home');
        });
      }else {
        Materialize.toast('Please provide a url', 4000);
      }
    };
  });
