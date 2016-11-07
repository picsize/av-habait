
avBait.component('categoryText', {
    templateUrl: 'app/rating/category-text/category-text.html',
    controller: function ($rootScope, $scope, $stateParams, Service) {
        $scope.models = {
            baseUrl: '/api/CategoryService.asmx/',
            params: $stateParams,
            subCategoryName: '',
            category: {}
        }

        $scope.functions = {

            init: function () {
                Service.post($scope.models.baseUrl, 'getCategoryInfo', { slug: $scope.models.params.subCategorySlug }).then(function (response) {
                    console.log('response', response);
                    $scope.models.category = JSON.parse(response.data.d).category;
                }, function (error) {
                    console.log(error);
                    $scope.models.errorHTML = error.data;
                });
            }
        }

        $scope.functions.init();
    }
});