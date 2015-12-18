app.config(function ($stateProvider, $urlRouterProvider ) {
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'components/about/about.html'
    })
});