app.controller('BannerCtrl', function ($scope, $state, $location, $rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
        $scope.currState = toState.name;
        $scope.$apply();
    });

    $rootScope.$on('$viewContentLoaded', function(event, viewConfig) {
        console.log($state.current.name);
        $scope.currState = $state.current.name;
    })
});