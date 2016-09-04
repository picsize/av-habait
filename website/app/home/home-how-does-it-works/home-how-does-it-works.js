
avBait.component('homeHowDoesItWorks', {
    templateUrl: 'app/home/home-how-does-it-works/home-how-does-it-works.html',
    css: {
        href: 'app/home/home-how-does-it-works/home-how-does-it-works.css',
        //bustCache: true
    },
    controller: function ($rootScope, $scope) {
        categories = $scope;

        categories.totalHomeCategories = 12;

        categories.getHomecategorise = function () {
            return new Array(categories.totalHomeCategories)
        }
    }
});