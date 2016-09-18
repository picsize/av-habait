
avBait.component('paidMembers', {
    templateUrl: 'app/home/paid-members/paid-members.html',
    controller: function ($rootScope, $scope) {
        members = $scope;

        members.totalPaidMembers = 5;

        members.getPaidMembers = function () {
            return new Array(members.totalPaidMembers);
        }
    }
});