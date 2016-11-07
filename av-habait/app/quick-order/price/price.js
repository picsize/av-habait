
avBait.component('price', {
    templateUrl: 'app/quick-order/price/price.html',
    controller: function ($rootScope, $scope, $state, $stateParams, $http) {
        $scope.state = $state;
        $scope.stateParams = $stateParams;
        $scope.models = {
            baseUrl: '/api/CategoryService.asmx/',
            category: [],
            area:''
        }

        $scope.functions = {
            service: function (handler, data) {
                return $http({
                    url: $scope.models.baseUrl + handler,
                    method: 'POST',
                    data: (data !== undefined) ? JSON.stringify(data) : '',
                    contentType: 'application/json'
                });
            },

            init: function () {
                $scope.functions.service('getSubCategoryInfo', { slug: $scope.stateParams.subCategorySlug }).then(function (response) {
                    if (JSON.parse(response.data.d).state === 1) {
                        $scope.models.category = JSON.parse(response.data.d).category;
                        $rootScope.models.category = JSON.parse(response.data.d).category;
                    }
                }, function (error) { });
            }
        }

        $scope.functions.init();
    }
});