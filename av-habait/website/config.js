var avBait = angular.module('avBait',
    [
        'ui.router',
        //'ui.bootstrap',
        'angularCSS',
        'ngCookies',
        'ngAnimate',
        'ngTouch',
        'angular-loading-bar'
    ]);

avBait.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);

avBait.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $logProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('website', {
            abstract: true,
            templateUrl: 'app/website.html',
        })
        .state('website.home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            data: { pageTitle: 'ראשי' }
        })
        .state('website.quickOrder', {
            url: '/הזמנה-מהירה',
            templateUrl: 'app/quick-order/quick-order.html',
            data: { pageTitle: 'הזמנה מהירה תוך 120 דקות' }
        })
        .state('website.rating', {
            url: '/דירוגים',
            templateUrl: 'app/rating/rating.html',
            data: { pageTitle: 'צפייה בדירוגים של בעלי המקצוע' }
        })


    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: true
    //});

});

//angular.bootstrap(document, ['keepItApp']);