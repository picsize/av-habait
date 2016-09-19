
avBait.component('categoryText', {
    templateUrl: 'app/rating/category-text/category-text.html',
    controller: function ($rootScope, $scope, $stateParams) {
        $scope.models = {
            params: $stateParams
        }
    }
});