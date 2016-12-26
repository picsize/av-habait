
avBait.component('websiteMenu', {
    templateUrl: 'app/menu/menu.html',
    controller: function ($rootScope, $scope, $location, $anchorScroll, $state, FacebookService) {

        $scope.models = {};

        $scope.functions = {
            navigateToSection: function (part) {
                if ($state.current.name != 'website.home') {
                    localStorage.setItem('hash', part);
                    $state.go("website.home", {});
                } else {
                    $location.hash(part);
                    $anchorScroll();
                }
            },

            facebookLogin: function () {
                FacebookService.login();
            }
        };


    }
});