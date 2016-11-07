
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
                Sunday: [
                    {
                        start: moment().set({ 'hour': 08, 'minute': 00, 'second': 00, 'millisecond': 00 }),
                        end: moment().set({ 'hour': 17, 'minute': 00, 'second': 00, 'millisecond': 00 })
                    }
                ],
                Monday: [
                    {
                        start: moment().set({ 'hour': 08, 'minute': 00, 'second': 00, 'millisecond': 00 }),
                        end: moment().set({ 'hour': 17, 'minute': 00, 'second': 00, 'millisecond': 00 })
                    }
                ],
                Tuesday: [
                    {
                        start: moment().set({ 'hour': 08, 'minute': 00, 'second': 00, 'millisecond': 00 }),
                        end: moment().set({ 'hour': 17, 'minute': 00, 'second': 00, 'millisecond': 00 })
                    }
                ],
                Wednesday: [
                    {
                        start: moment().set({ 'hour': 08, 'minute': 00, 'second': 00, 'millisecond': 00 }),
                        end: moment().set({ 'hour': 17, 'minute': 00, 'second': 00, 'millisecond': 00 })
                    }
                ],
                Thursday: [
                    {
                        start: moment().set({ 'hour': 08, 'minute': 00, 'second': 00, 'millisecond': 00 }),
                        end: moment().set({ 'hour': 17, 'minute': 00, 'second': 00, 'millisecond': 00 })
                    }
                ],
                Friday: [
                    {
                        start: moment().set({ 'hour': 08, 'minute': 00, 'second': 00, 'millisecond': 00 }),
                        end: moment().set({ 'hour': 17, 'minute': 00, 'second': 00, 'millisecond': 00 })
                    }
                ],
                Saturday: [
                    {
                        start: moment().set({ 'hour': 08, 'minute': 00, 'second': 00, 'millisecond': 00 }),
                        end: moment().set({ 'hour': 17, 'minute': 00, 'second': 00, 'millisecond': 00 })
                    }
                ],
                About: '',
                Avatar: ''
            }
        }

        $scope.functions = {
            addMember: function () {
                $scope.models.business.Avatar = $scope.models.business.File.base64;
                $scope.models.business.Hours =
                    'ראשון: ' + $scope.models.business.Sunday[0].start.get('hour') + ':' + $scope.models.business.Sunday[0].start.get('minute') + ' - ' + $scope.models.business.Sunday[0].end.get('hour') + ':' + $scope.models.business.Sunday[0].end.get('minute') + '<br>' +
                    'שני: ' + $scope.models.business.Monday[0].start.get('hour') + ':' + $scope.models.business.Monday[0].start.get('minute') + ' - ' + $scope.models.business.Monday[0].end.get('hour') + ':' + $scope.models.business.Monday[0].end.get('minute') + '<br>' +
                    'שלישי: ' + $scope.models.business.Tuesday[0].start.get('hour') + ':' + $scope.models.business.Tuesday[0].start.get('minute') + ' - ' + $scope.models.business.Tuesday[0].end.get('hour') + ':' + $scope.models.business.Tuesday[0].end.get('minute') + '<br>' +
                    'רביעי: ' + $scope.models.business.Wednesday[0].start.get('hour') + ':' + $scope.models.business.Wednesday[0].start.get('minute') + ' - ' + $scope.models.business.Wednesday[0].end.get('hour') + ':' + $scope.models.business.Wednesday[0].end.get('minute') + '<br>' +
                    'חמישי: ' + $scope.models.business.Thursday[0].start.get('hour') + ':' + $scope.models.business.Thursday[0].start.get('minute') + ' - ' + $scope.models.business.Thursday[0].end.get('hour') + ':' + $scope.models.business.Thursday[0].end.get('minute') + '<br>' +
                    'שישי: ' + $scope.models.business.Friday[0].start.get('hour') + ':' + $scope.models.business.Friday[0].start.get('minute') + ' - ' + $scope.models.business.Friday[0].end.get('hour') + ':' + $scope.models.business.Friday[0].end.get('minute') + '<br>' +
                    'שבת: ' + $scope.models.business.Saturday[0].start.get('hour') + ':' + $scope.models.business.Saturday[0].start.get('minute') + ' - ' + $scope.models.business.Saturday[0].end.get('hour') + ':' + $scope.models.business.Saturday[0].end.get('minute') + '<br>';
                console.log($scope.models.business);
                
                Service.post($scope.models.baseUrl, 'addMember', { member: JSON.stringify($scope.models.business) }).then(function (response) {
                    console.log('response', response)
                    if (JSON.parse(response.data.d).state === 1) {
                        console.log(JSON.parse(response.data.d));  
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