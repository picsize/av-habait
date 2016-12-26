
avBait.component('order', {
    templateUrl: 'app/quick-order/order/order.html',
    controller: function ($rootScope, $scope, $state, $stateParams, Service) {
        $scope.state = $state;
        $scope.stateParams = $stateParams;
        $scope.models = {
            baseUrl: '/api/Order.asmx/',
            order: {
                fullName: '',
                email: '',
                phone: '',
                address: '',
                category: {}
            }
        }

        $scope.functions = {
           

            init: function () {
                $scope.models.order.category = $rootScope.models.category;
            },

            sendOrder: function () {
                var email = '<div style="direction:rtl; test-align:right;">' +
                '<h1>הודעה זו נשלחה על מנת לפתוח בקשת קריאה לטכנאי עבור ' + $scope.models.order.category[0].SubCategories[0].Name + '</h1>' +
                '<p>פרטי ההזמנה:</p>' +
                '<p>שם המזמין: ' + $scope.models.order.fullName + '</p>' +
                '<p>דואר אלקטרוני: ' + $scope.models.order.email + '</p>' +
                '<p>טלפון: ' + $scope.models.order.phone + '</p>' +
                '<p>כתובת: ' + $scope.models.order.address + '</p>' +
             '</div>';
                Service.post($scope.models.baseUrl,'sendOrder', {
                    subject: 'הזמנה חדשה באתר אב הבית',
                    msg: email,
                    to: 'shay.avr1911@gmail.com'
                }).then(function (response) {
                }, function (error) { });
            }
        }

        setTimeout($scope.functions.init, 1000 * 1.5);

    }
});