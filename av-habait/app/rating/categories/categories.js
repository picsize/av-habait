
avBait.component('ratingCategories', {
    templateUrl: 'app/rating/categories/categories.html',
    controller: function ($rootScope, $scope) {
        categories = $scope;

        categories.totalHomeCategories = 12;

        categories.getHomecategorise = function () {
            return new Array(categories.totalHomeCategories)
        }
    }
});