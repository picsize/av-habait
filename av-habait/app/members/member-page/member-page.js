
avBait.component('memberPage', {
    templateUrl: 'app/members/member-page/member-page.html',
    controller: function ($rootScope, $scope, $stateParams, Service) {
        $scope.models = {
            baseUrl: '/api/BusinessService.asmx/',
            params: $stateParams,
            business: {},
            user: {
                isLoggedIn:false
            }
        }

        $scope.functions = {
            init: function () {
                Service.post($scope.models.baseUrl, 'getMemberBySlug', { slug: $scope.models.params.member }).then(function (response) {
                    console.log('response', response)
                    if (JSON.parse(response.data.d).state === 1) {
                        console.log(JSON.parse(response.data.d));
                        $scope.models.business = JSON.parse(response.data.d).business;
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }

        $scope.functions.init();

        
    }
});