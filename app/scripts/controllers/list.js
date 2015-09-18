'use strict';

/**
 * @ngdoc function
 * @name wishListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wishListApp
 */

  angular.module('wishListApp')
    .controller('ListCtrl', function($scope, $routeParams, $cookieStore, $http, $location) {
      if(!$cookieStore.get('id')){
          $location.path('/');
      }else {
          $scope.idCookie = $cookieStore.get('id');
      }

      $scope.rating = 0;
       $scope.ratings = [{
           max: 4
       }];

       $scope.getSelectedRating = function (rate, id, color_rate) {

           $http.put("http://0.0.0.0:9292/wishlistslinks/"+id+"?rate="+rate+"&color_rate="+color_rate)
           .success(function(data){
             location.reload();
           });
       }

      $http.get("http://0.0.0.0:9292/wishlists/"+$routeParams.id)
        .success(function(data){
          $cookieStore.put('list_id', data.id);
          $scope.wishlist = data;
        });

      $scope.idListCookie = $cookieStore.get('list_id');

      $http.get("http://0.0.0.0:9292/wishlistslinks/wishlist_id/"+$scope.idListCookie)
        .success(function(data){
          console.log(data.length)
          if (data.length != 0) {
            $scope.nothing = false
            $scope.wishlistlinks = data;
          }else {
            $scope.nothing = true
          }
        });

      $scope.deleteLink = function(id){
        if (window.confirm("Voulez vous vraiment supprimer ce produit ?")) {
          $http.delete("http://0.0.0.0:9292/wishlistslinks/"+id)
            .success(function(data){
              location.reload();
            });
        }
      }

    });
