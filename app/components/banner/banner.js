app.directive('banner', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/banner/banner.html',
        controller: function ($scope, $state, $location, $rootScope) {
            $scope.currState = 'main';
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
                $scope.currState = toState.name;
            })
        }
    }
});