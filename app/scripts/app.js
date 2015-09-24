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
    'ngTouch',
    'uiRouterStyles'
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
        templateUrl: 'views/homepage.html',
        // controller: 'HomePageCtrl',
        // controllerAs: 'hompepage',
        data: {
           css: 'styles/bootstrap.min.css'
         }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'RegisterCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/mylist/:id', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .when('/edit/:list_id', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'edit'
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
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
      .when('/:id/:list_id', {
        templateUrl: 'views/public_list.html',
        controller: 'PublicListCtrl',
        controllerAs: 'public_list'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
