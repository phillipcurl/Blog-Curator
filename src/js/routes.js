'use strict';

/**
 * Route configuration for the myApp module.
 */
angular.module('myApp').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'templates/projects.html',
        controller: 'ProjectsCtrl'
      })
      .state('clientportal', {
        url: '/projects/clientportal',
        templateUrl: 'templates/projects/clientportal.html',
        controller: 'ProjectsCtrl'
      })
      .state('tdwebsite', {
        url: '/projects/tdwebsite',
        templateUrl: 'templates/projects/tdwebsite.html',
        controller: 'ProjectsCtrl'
      })
      .state('writing', {
        url: '/writing',
        templateUrl: 'templates/writing.html',
        controller: 'WritingCtrl'
      });
  }
]);
