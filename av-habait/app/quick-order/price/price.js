
avBait.component('price', {
    templateUrl: 'app/quick-order/price/price.html',
    controller: function ($rootScope, $scope, $state, $stateParams, $http, Service) {
        $scope.state = $state;
        $scope.stateParams = $stateParams;
        $scope.models = {
            baseUrl: '/api/CategoryService.asmx/',
            category: [],
            categories: [],
            subCategories: [],
            selectedCategory: '',
            subCategory: '',
            price: 0.0,
            filter: {
                area: '',
                category: 0,
                subCategory: 0
            }
        }

        $scope.functions = {
            init: function () {
                if ($scope.stateParams.subCategorySlug !== '') {    
                    Service.post($scope.models.baseUrl, 'getSubCategoryInfo', { slug: $scope.stateParams.subCategorySlug }).then(function (response) {
                        if (JSON.parse(response.data.d).state === 1) {
                            $scope.models.category = JSON.parse(response.data.d).category;
                            $rootScope.models.category = JSON.parse(response.data.d).category;
                        }
                    }, function (error) { });
                }
                

                Service.post($scope.models.baseUrl, 'getCategories').then(function (response) {
                    if (JSON.parse(response.data.d).state === 1) {
                        $scope.models.categories = JSON.parse(response.data.d).categories;
                        console.log('$scope.models.categories', $scope.models.categories)
                    }
                }, function (error) { });
            },

            setSubCategories: function () {
                $scope.models.categories.forEach(function (elem) {
                    if (elem.Id === $scope.models.filter.category * 1) {
                        $scope.models.subCategories = elem.SubCategories;
                        $scope.models.selectedCategory = elem.Name;
                        $scope.models.price = elem.AvgPrice;
                    }
                });
            },

            showSubInfo: function () {
                $scope.models.subCategories.forEach(function (elem) {
                    if (elem.Id === $scope.models.filter.subCategory * 1) {
                        $scope.models.subCategory = elem.Name;
                        $scope.models.price = elem.AvgPrice;
                    }
                });
            }
        }

        $scope.functions.init();
    }
});