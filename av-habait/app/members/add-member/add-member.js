
avBait.component('addMember', {
    templateUrl: 'app/members/add-member/add-member.html',
    controller: function ($rootScope, $scope, $stateParams, Service) {
        $scope.models = {
            params: $stateParams
        }
    }
});