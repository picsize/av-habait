avBait.controller('vip', ['$scope', function ($scope) {

    $scope.models = {
        view: 'all',
        form: {
            fullName: '',
            phoneNumber: '',
            email: '',
            address: '',
            plan: 'מסלול פרטי',
            time:''
        }
    }

    $scope.functions = {
        setView: function (view) {
            $scope.models.view = view;
            $scope.models.form.plan = (view === 'regular') ? 'מסלול פרטי' : (view === 'gold') ? 'מסלול זהב' : 'מסלול VIP'
        }
    }

}]);