
avBait.component('homeCategories', {
    templateUrl: 'app/home/home-categories/home-categories.html',
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