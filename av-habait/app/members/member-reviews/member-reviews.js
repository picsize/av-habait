
avBait.component('memberReviews', {
    templateUrl: 'app/members/member-reviews/member-reviews.html',
    controller: function ($rootScope, $scope, $stateParams) {
        $scope.models = {
            params: $stateParams
        }
    }
});