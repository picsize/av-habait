
avBait.component('homeCategories', {
    templateUrl: 'app/home/home-categories/home-categories.html',
    controller: function ($rootScope, $scope, $http) {
        $scope.models = {
            baseUrl: '/api/CategoryService.asmx/',
            categories: []
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
                $scope.functions.service('getCategories')
                .success(function (data) {
                    if (JSON.parse(data.d).state === 1) {
                        $scope.models.categories = JSON.parse(data.d).categories;
                        console.log($scope.models.categories);
                    }
                })
                .error(function (error) {

                });
            },

            showAll: function () {
                angular.element('.category-holder').removeClass('hide-all');
                angular.element('.all-categories span').hide();
            }
        }
        

        $scope.functions.init();

    }
});