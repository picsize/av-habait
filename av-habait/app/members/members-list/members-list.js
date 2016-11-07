
avBait.component('membersList', {
    templateUrl: 'app/members/members-list/members-list.html',
    controller: function ($rootScope, $scope, $stateParams, Service) {
        $scope.models = {
            baseUrl: '/api/BusinessService.asmx/',
            params: $stateParams,
            businessList: {}
        }

        $scope.functions = {
            init: function () {
                Service.post($scope.models.baseUrl, 'getMembers', { slug: $scope.models.params.subCategorySlug }).then(function (response) {
                    console.log('response', response)
                    if (JSON.parse(response.data.d).state === 1) {
                        $scope.models.businessList = JSON.parse(response.data.d).businessList;
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }

        $scope.functions.init();
    }
});