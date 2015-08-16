'use strict';

/**
 * Route configuration for the curatorApp module.
 */
angular.module('curatorApp').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider

  		// route for the home page
  		.when('/', {
  			templateUrl : 'templates/home.html'
  		})

      /**
       * route to view all genres
       */
  		.when('/home', {
  			templateUrl: 'templates/home.html',
  			controller: 'MasterCtrl'
  		})

      /**
       * route to view all genres
       */
  		.when('/genres', {
  			templateUrl: 'templates/genres.html',
  			controller: 'GenresCtrl'
  		})

      /**
  		 * route to blogs for a single genre
  		 */
  		.when('/genres/:genre_id', {
  			templateUrl: 'templates/genre.html',
  			controller: 'GenreCtrl'
  		})

      /**
  		 * route to view all
  		 */
  		.when('/blogs', {
  			templateUrl: 'templates/blogs.html',
  			controller: 'BlogsCtrl'
  		})

  		/**
  		 * route to view a single blog feed
  		 */
  		.when('/blogs/:blog_id', {
  			templateUrl: 'templates/blog.html',
  			controller: 'BlogCtrl'
  		});

  	$locationProvider.html5Mode(true);
  }
]);
