
avBait.component('breadcrumbs', {
    templateUrl: 'app/breadcrumbs/breadcrumbs.html',
    controller: function ($rootScope, $scope, $state, $stateParams) {
        $scope.models = {
            state: $state,
            crumbs: []
        }

        $scope.functions = {
            init: function () {
                switch ($scope.models.state.current.name) {
                    case 'website.rating.main': {
                        $scope.models.crumbs.push({ name: 'ראשי', state: 'website.home' });
                    } break;
                    case 'website.rating.member': {
                        $scope.models.crumbs.push({ name: 'ראשי', state: 'website.home' });
                        $scope.models.crumbs.push({ name: 'אב הבית דירוגים', state: 'website.rating.main' });
                        $scope.models.crumbs.push({ name: $stateParams.categoryName, state: 'website.rating.main' });
                        $scope.models.crumbs.push({ name: $stateParams.subCategoryName,state:'' });
                    } break;
                    default: { $scope.models.crumbs.push({ name: 'ראשי', state: 'website.home' }); } break;

                }

            }
        }


        $scope.functions.init();
    }
});