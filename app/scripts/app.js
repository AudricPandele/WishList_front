'use strict';

/**
 * @ngdoc overview
 * @name wishListApp
 * @description
 * # wishListApp
 *
 * Main module of the application.
 */
angular
  .module('wishListApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {

    // ROUTES

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'RegisterCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/mylist/:id', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/create_wishlist', {
        templateUrl: 'views/create_wishlist.html',
        controller: 'CreatewishlistCtrl',
        controllerAs: 'wishlist'
      })
      .when('/add_wishlistlink', {
        templateUrl: 'views/add_wishlistlink.html',
        controller: 'AddWishListlinkCtrl',
        controllerAs: 'add_wishlistlink'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
