
avBait.component('membersList', {
    templateUrl: 'app/members/members-list/members-list.html',
    controller: function ($rootScope, $scope, $stateParams, Service) {
        $scope.models = {
            baseUrl: '/api/BusinessService.asmx/',
            baseUrlCategory: '/api/CategoryService.asmx/',
            params: $stateParams,
            businessList: {},
            categories: [],
            subCategories: [],
            selectrdCategory: '',
            subCategory: '',
            filter: {
                area: '',
                category: 0,
                subCategory: 0
            }
        }

        $scope.functions = {
            init: function () {
                if ($scope.models.params.subCategorySlug === '') {
                    Service.post($scope.models.baseUrl, 'getMembers', { slug: $scope.models.params.categorySlug }).then(function (response) {
                        console.log('response', response)
                        if (JSON.parse(response.data.d).state === 1) {
                            $scope.models.businessList = JSON.parse(response.data.d).businessList;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                } else {
                    Service.post($scope.models.baseUrl, 'getMembers', { slug: $scope.models.params.subCategorySlug }).then(function (response) {
                        console.log('response', response)
                        if (JSON.parse(response.data.d).state === 1) {
                            $scope.models.businessList = JSON.parse(response.data.d).businessList;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }

                Service.post($scope.models.baseUrlCategory, 'getCategories').then(function (response) {
                    if (JSON.parse(response.data.d).state === 1) {
                        $scope.models.categories = JSON.parse(response.data.d).categories;
                        console.log('$scope.models.categories', $scope.models.categories);
                    }
                }, function (error) { });
                
            },

            findBusiness: function () {
                Service.post($scope.models.baseUrl, 'getMembers', { slug: $scope.models.filter.category }).then(function (response) {
                    console.log('response', response)
                    if (JSON.parse(response.data.d).state === 1) {
                        $scope.models.businessList = JSON.parse(response.data.d).businessList;
                        console.log('b', $scope.models.businessList);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }

        $scope.functions.init();
    }
});

