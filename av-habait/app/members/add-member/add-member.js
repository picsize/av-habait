
avBait.component('addMember', {
    templateUrl: 'app/members/add-member/add-member.html',
    controller: function ($rootScope, $scope, $stateParams, Service) {
        $scope.models = {
            baseUrl: '/api/BusinessService.asmx/',
            params: $stateParams,
            business: {
                Email: '',
                Password: '',
                FullName: '',
                MobileNumber: '',
                HomeNumber: '',
                Address: '',
                File: '',
                BusinessName: '',
                Hours: '',
                About: '',
                Avatar: ''
            }
        }

        $scope.functions = {
            addMember: function () {
                $scope.models.business.Avatar = $scope.models.business.File.base64;
                console.log($scope.models.business);
                Service.post($scope.models.baseUrl, 'addMember', { member: JSON.stringify($scope.models.business) }).then(function (response) {
                    console.log('response', response)
                    if (JSON.parse(response.data.d).state === 1) {
                        debugger
                        //$scope.models.categories = JSON.parse(response.data.d).categories;
                        //console.log($scope.models.categories);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
    }
});