
avBait.component('price', {
    templateUrl: 'app/price/price.html',
    controller: function ($rootScope, $scope, $state, $stateParams) {
        $scope.state = $state;
        $scope.stateParams = $stateParams;
    }
});