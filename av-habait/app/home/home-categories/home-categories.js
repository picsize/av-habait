
avBait.component('homeCategories', {
    templateUrl: 'app/home/home-categories/home-categories.html',
    controller: function ($rootScope, $scope, Service) {
        $scope.models = {
            baseUrl: '/api/CategoryService.asmx/',
            categories: []
        }

        $scope.functions = {
            init: function () {
                Service.post($scope.models.baseUrl, 'getCategories').then(function (response) {
                    if (JSON.parse(response.data.d).state === 1) {
                        var c = JSON.parse(response.data.d).categories;
                        //c.forEach(function (elem) {
                        //    if (elem.Name.search("'") != -1) {
                        //        elem.Name = elem.Name.replace("'", "g");
                        //        elem.Slug = elem.Slug.replace("'", "g");
                        //    }
                        //    elem.SubCategories.forEach(function (elem) {
                        //        if (elem.Name.search("'") != -1) {
                        //            elem.Name = elem.Name.replace("'", "g");
                        //            elem.Slug = elem.Slug.replace("'", "g");
                        //        }
                        //    });
                        //});
                        $scope.models.categories = c;
                    }
                },function (error) {  });
            },

            showAll: function () {
                $scope.models.categories.sort(function (a, b) {
                    if (a.Name < b.Name) return -1;
                    if (a.Name > b.Name) return 1;
                    return 0;
                })
                angular.element('.category-holder').removeClass('hide-all');
                angular.element('.all-categories span').hide();
            }
        }
       
    }
});