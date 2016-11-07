
avBait.component('ratingCategories', {
    templateUrl: 'app/rating/categories/categories.html',
    controller: function ($rootScope, $scope, Service) {
        $scope.models = {
            baseUrl: '/api/CategoryService.asmx/',
            categories: []
        }

        $scope.functions = {
           
            init: function () {
                Service.post($scope.models.baseUrl, 'getAllCategories').then(function (response) {
                    if (JSON.parse(response.data.d).state === 1) {
                        $scope.models.categories = JSON.parse(response.data.d).categories;
                        console.log('$scope.models.categories', $scope.models.categories);
                    }
                }, function (error) { });
            }
        }


        $scope.functions.init();
    }
});