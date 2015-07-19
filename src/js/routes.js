'use strict';

/**
 * Route configuration for the Curator module.
 */
angular.module('Curator').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/home.html'
            })
            .state('page', {
                url: '/page',
                templateUrl: 'templates/page.html'
            });
    }
]);
