
avBait.component('homeCategories', {
    templateUrl: 'app/home/home-categories/home-categories.html',
    controller: function ($rootScope, $scope, Service) {
        $scope.models = {
            baseUrl: '/api/CategoryService.asmx/',
            categories: []
        }

        $scope.functions = {
            init: function () {
                Service.post($scope.models.baseUrl,'getCategories').then(function (response) {  
                    if (JSON.parse(response.data.d).state === 1) {
                        $scope.models.categories = JSON.parse(response.data.d).categories;
                    }
                },function (error) {  });
            },

            showAll: function () {
                angular.element('.category-holder').removeClass('hide-all');
                angular.element('.all-categories span').hide();
            }
        }
        

        $scope.functions.init();

    }
});