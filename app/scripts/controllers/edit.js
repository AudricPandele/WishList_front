'use strict';

/**
 * @ngdoc function
 * @name wishListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wishListApp
 */

  angular.module('wishListApp')
    .controller('EditCtrl', function($scope, $routeParams, $cookieStore, $http, $location) {
      $scope.idListCookie = $cookieStore.get('list_id');

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
        if (window.confirm("Do you really want to delete this product ?")) {
          $http.delete("http://0.0.0.0:9292/wishlistslinks/"+id)
            .success(function(data){
              location.reload();
            });
        }
      }

      $scope.makeOrder = function (id) {
        if (window.confirm("Are you sure this product is ordered ?")) {
          $http.put("http://0.0.0.0:9292/wishlistslinks/"+id+"?ordered=true")
          .success(function(data){
            location.reload();
          });
        }
      }

      $scope.removeOrder = function (id) {
        if (window.confirm("Are you sure this product isn't ordered ?")) {
          $http.put("http://0.0.0.0:9292/wishlistslinks/"+id+"?ordered=false")
          .success(function(data){
            location.reload();
          });
        }
      }

      $scope.updateLinks = function (id, wishlistlink) {
        $http.put("http://0.0.0.0:9292/wishlistslinks/"+id+"?title="+wishlistlink.title)
        .success(function(data){
          location.reload();
        });
      }

    });
