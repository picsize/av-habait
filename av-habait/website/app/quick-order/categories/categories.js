
avBait.component('quickOrderCategories', {
    templateUrl: 'app/quick-order/categories/categories.html',
    //css: {
    //    href: 'website/app/home/home-categories/home-categories.css',
    //    //bustCache: true
    //},
    controller: function ($rootScope, $scope) {
        categories = $scope;

        categories.totalHomeCategories = 12;

        categories.getHomecategorise = function () {
            return new Array(categories.totalHomeCategories)
        }
    }
});