
avBait.component('memberPage', {
    templateUrl: 'app/members/member-page/member-page.html',
    controller: function ($rootScope, $scope, $stateParams) {
        $scope.models = {
            params: $stateParams
        }
    }
});