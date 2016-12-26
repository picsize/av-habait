avBait.factory('FacebookService', function ($http) {

    functions = {
        init: function() {
            FB.init({
                appId: '880290528760995',
                status: true,
                cookie: true,
                xfbml: true,
                version: 'v2.8'
            });
        },
        login: function () {
            functions.init();
            FB.login(function (response) {
                // handle the response
            }, { scope: 'public_profile,email' });
        }
    }

    return functions;
});