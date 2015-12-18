app.config(function ($stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'components/about/about.html'
    })
});