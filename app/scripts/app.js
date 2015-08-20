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
  .config(function ($routeProvider, $httpProvider) {
        //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

      //Remove the header containing XMLHttpRequest used to identify ajax call
      //that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

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
        controllerAs: 'main',
        access: {
            requiresLogin: true
        }
      })
      .when('/mylist/:id', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list',
        access: {
            requiresLogin: true
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',

      })
      .when('/create_wishlist', {
        templateUrl: 'views/create_wishlist.html',
        controller: 'CreatewishlistCtrl',
        controllerAs: 'wishlist',
        access: {
            requiresLogin: true
        }
      })
      .when('/add_wishlistlink', {
        templateUrl: 'views/add_wishlistlink.html',
        controller: 'AddWishListlinkCtrl',
        controllerAs: 'add_wishlistlink',
        access: {
            requiresLogin: true
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
