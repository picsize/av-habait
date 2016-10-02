
avBait.component('membersList', {
    templateUrl: 'app/members/members-list/members-list.html',
    controller: function ($rootScope, $scope, $stateParams) {
        $scope.models = {
            params: $stateParams
        }
    }
});