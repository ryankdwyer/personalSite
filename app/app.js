const app = angular.module('rkd', ['ui.router'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    });