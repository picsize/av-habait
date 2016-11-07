
avBait.component('search', {
    templateUrl: 'app/search/search.html',
    controller: function ($rootScope, $scope, Service) {
        $scope.models = {
            baseUrl: '/api/CategoryService.asmx/',
            categories: [],
            searchString:''
        }

        $scope.functions = {
            init: function () {
                Service.post($scope.models.baseUrl, 'search').then(function (response) {
                    if (JSON.parse(response.data.d).state === 1) {
                        $scope.models.categories = JSON.parse(response.data.d).categories;
                    }
                }, function (error) { });
            },

            doSearch: function ($event) {
                var string = $event.target.value;
            }
        }


        $scope.functions.init();
    }
});