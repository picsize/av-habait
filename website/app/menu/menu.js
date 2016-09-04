﻿
avBait.component('websiteMenu', {
    templateUrl: 'app/menu/menu.html',
    css: {
        href: 'app/menu/menu.css',
        //bustCache: true
    },
    controller: function ($rootScope, $scope) {

        var menu = $scope;

        menu.toggleMobileMenu = function ($event) {
            var _btn = angular.element($event.target);    
            if (_btn.attr('aria-expanded') != 'false') {
                angular.element('#main-menu').collapse('hide');
            } 
        }

        $scope.models = {
            user: {},
            showWelcome: false
        }

        $scope.register = function () {
            Popup.open('popup-register', 'authController', '');
        }

        $scope.login = function () {
            Popup.open('popup-login', 'authController', '');
        }

        $scope.navigate = function (state, params) {
            View.show(state, params);
        }

        $scope.init = function () {
            //var userLogin = setInterval(function () {
            //    $scope.models.user = Cookie.getObject('user');
            //    if ($scope.models.user != undefined) {
            //        $scope.models.showWelcome = true;
            //    } else {
            //        $scope.models.showWelcome = false;
            //    }
            //}, 1000 * 0.5);
        }

        $scope.logout = function () {
            Cookie.remove('user');
            location.reload();
        }

        $scope.init();
    }
});