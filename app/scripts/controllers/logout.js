'use strict';

/**
 * @ngdoc function
 * @name wishListApp.controller:CreatewishlistCtrl
 * @description
 * # CreatewishlistCtrl
 * Controller of the wishListApp
 */

angular.module('wishListApp')
    .controller('LogoutCtrl', function($location, $cookieStore){
      $scope.logout = function(){
        $cookieStore.remove('id');
        $cookieStore.remove('mail');
        $cookieStore.remove('list_id');
        location.reload();
      }

    })
