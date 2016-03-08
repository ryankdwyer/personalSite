app.controller('BannerCtrl', function ($scope, $state, $location, $rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
        $scope.currState = toState.name;
        $scope.$apply();
    });

    $rootScope.$on('$viewContentLoaded', function(event, viewConfig) {
        $scope.currState = $state.current.name;
    })
});