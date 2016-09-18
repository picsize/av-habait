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
            abstract: true,
            templateUrl: 'app/quick-order/quick-order.html'
        })
        .state('website.quickOrder.main', {
            url: '/הזמנה-מהירה',
            templateUrl: 'app/quick-order/main.html',
            data: { pageTitle: 'הזמנה מהירה תוך 120 דקות' }
        })
        .state('website.quickOrder.getPrice', {
            url: '/הזמנה-מהירה/:category/:subCategory',
            templateUrl: 'app/quick-order/get-price.html',
            data: { pageTitle: 'קבל הצעת מחיר' }
        })
        .state('website.rating', {
            url: '/דירוגים',
            templateUrl: 'app/rating/rating.html',
            data: { pageTitle: 'צפייה בדירוגים של בעלי המקצוע' }
        })
        .state('website.vip', {
            abstract: true,
            templateUrl: 'app/vip/main.html'
        })
        .state('website.vip.forHome', {
            url: '/אב-הבית-פרטי',
            templateUrl: 'app/vip/for-home.html',
            data: { pageTitle: 'בתים פרטיים' }
        })


    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: true
    //});

});

//angular.bootstrap(document, ['keepItApp']);