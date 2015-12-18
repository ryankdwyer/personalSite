const app = angular.module('rkd', ['ui.router'])
    .config(function ($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
    });