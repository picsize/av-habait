var avBait = angular.module('avBait',
    [
        'ui.router',
        //'ui.bootstrap',
        'angularCSS',
        'ngCookies',
        'ngAnimate',
        'ngSanitize',
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
        .state('website.quickOrder.order', {
            url: '/הזמנה-מהירה/ביצוע-הזמנה',
            templateUrl: 'app/quick-order/order/main.html',
            data: { pageTitle: 'הזמנה' }
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
            url: '/דירוגים/:categorySlug/:subCategorySlug',
            templateUrl: 'app/rating/members.html',
            data: { pageTitle: 'צפייה בדירוגים של בעלי המקצוע' },
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
        .state('website.rating.memberByCategory', {
            url: '/דירוגים/:categorySlug/',
            templateUrl: 'app/rating/members.html',
            data: { pageTitle: 'צפייה בדירוגים של בעלי המקצוע' },
            params: {
                categoryName: {
                    value: '',
                    squash: false
                }
            }
        })
        .state('website.member', {
            url: '/בעלי-מקצוע/:member',
            templateUrl: 'app/members/member.html',
            data: { pageTitle: 'פרטי בעל המקצוע' },

        })
        .state('website.vip', {
            abstract: true,
            templateUrl: 'app/vip/main.html'
        })
        .state('website.vip.forHome', {
            url: '/אב-הבית-פרטי',
            templateUrl: 'app/vip/for-home.html',
            controller: 'vip',
            data: { pageTitle: 'בתים פרטיים' }
        })
        .state('website.addMember', {
            url: '/הוספת-בעל-מקצוע',
            templateUrl: 'app/pages/add-member.html',
            data: { pageTitle: 'הוספת בעל מקצוע' }
        })
        .state('website.about', {
            url: '/מי-אנחנו',
            templateUrl: 'app/pages/about.html',
            data: { pageTitle: 'מי אנחנו' }
        })
        .state('website.contact', {
            url: '/צור-קשר',
            templateUrl: 'app/pages/contact.html',
            data: { pageTitle: 'צור קשר' }
        })
        .state('website.memberJoin', {
            url: '/בעל-מקצוע-הצטרף',
            templateUrl: 'app/pages/member-join.html',
            data: { pageTitle: 'בעל מקצוע הצטרף' }
        })
        .state('website.forAppartmentRent', {
            url: '/אב-הבית-למשכירי-דירות',
            templateUrl: 'app/pages/appartment-rent.html',
            data: { pageTitle: 'אב הבית למשכירי דירות' }
        })
        .state('website.forBusinessAndOffice', {
            url: '/אב-הבית-למשרדים-ועסקים',
            templateUrl: 'app/pages/business-and-office.html',
            data: { pageTitle: 'אב הבית למשרדים ועסקים' }
        })
        .state('website.forRenovation', {
            url: '/אב-הבית-שיפוצים',
            templateUrl: 'app/pages/renovation.html',
            data: { pageTitle: 'אב הבית שיפוצים' }
        })
        .state('website.houseCommittees', {
            url: '/אב-הבית-לועדי-בתים',
            templateUrl: 'app/pages/house-committees.html',
            data: { pageTitle: 'אב הבית ועדי בתים' }
        })
        .state('website.gravestone', {
            url: '/אב-הבית-שימור-מצבות',
            templateUrl: 'app/pages/gravestone.html',
            data: { pageTitle: 'אב הבית שימור מצבות' }
        })
        .state('website.pricing', {
            abstract: true,
            templateUrl: 'app/pricing/main.html'
        })
        .state('website.pricing.choose', {
            url: '/מחירון-אב-הבית',
            templateUrl: 'app/pricing/choose.html',
            data: { pageTitle: 'מחירון אב הבית' }
        })
        .state('website.article1', {
            url: '/טכנאי-מייבשי-כביסה',
            templateUrl: 'app/articles/article1.html',
            data: { pageTitle: 'טכנאי מייבשי כביסה' }
        })
        .state('website.profile', {
            url: '/פרופיל',
            templateUrl: 'app/profile/main.html',
            data: { pageTitle: 'פרופיל משתמש' }
        })

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });

});


avBait.run(function ($window, $rootScope, $templateCache, $location, $anchorScroll, $urlRouter) {
    $rootScope.models = {};
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });

    //when the route is changed scroll to the proper element.
    $rootScope.$on('$locationChangeSuccess', function () {
        if (localStorage.getItem('hash')) {
            setTimeout(function () {
                $location.hash(localStorage.getItem('hash'));
                $anchorScroll();
                localStorage.removeItem('hash');
            }, 500)
        }

    });
});



//angular.element(document).ready(function () {
//    angular.bootstrap(document, ['avBait']);
//});
