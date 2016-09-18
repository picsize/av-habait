
avBait.component('homeHowDoesItWorks', {
    templateUrl: 'app/home/home-how-does-it-works/home-how-does-it-works.html',
    controller: function ($rootScope, $scope) {
        categories = $scope;

        categories.totalHomeCategories = 12;

        categories.getHomecategorise = function () {
            return new Array(categories.totalHomeCategories)
        }
    }
});