var avBait = angular.module('avBait',
    [
        'ui.router',
        //'ui.bootstrap',
        'angularCSS',
        'ngCookies',
        'ngAnimate',
        'ngTouch',
        'angular-loading-bar',
        'angularLoad',
        'naif.base64'
    ]);

avBait.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);

avBait.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $logProvider, $compileProvider, $httpProvider) {

    $compileProvider.debugInfoEnabled(false);
    $httpProvider.useApplyAsync(true);

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
            url: '/הזמנה-מהירה/:categorySlug/:subCategorySlug',
            templateUrl: 'app/quick-order/get-price.html',
            data: { pageTitle: 'קבל הצעת מחיר' },
            params: {
                categoryName: {
                    value: '',
                    squash: false
                },
                subCategoryName: {
                    value: '',
                    squash: false
                }
            }
        })
        .state('website.rating', {
            abstract: true,
            templateUrl: 'app/rating/rating.html'
        })
        .state('website.rating.main', {
            url: '/דירוגים',
            templateUrl: 'app/rating/main.html',
            data: { pageTitle: 'צפייה בדירוגים של בעלי המקצוע' }
        })
        .state('website.rating.member', {
            url: '/דירוגים/:category/:subCategory',
            templateUrl: 'app/rating/members.html',
            data: { pageTitle: 'צפייה בדירוגים של בעלי המקצוע' }
        })
        .state('website.member', {
            url: '/בעלי מקצוע/:member',
            templateUrl: 'app/members/member.html',
            data: { pageTitle: 'פרטי בעל המקצוע' }
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
        .state('website.addMember', {
            url: '/הוספת-בעל-מקצוע',
            templateUrl: 'app/pages/add-member.html',
            data: { pageTitle: 'הוספת בעל מקצוע' }
        })


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });

});


avBait.run(function ($rootScope) {
    $rootScope.models = {};
});

//angular.element(document).ready(function () {
//    angular.bootstrap(document, ['avBait']);
//});
