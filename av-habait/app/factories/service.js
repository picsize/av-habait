avBait.factory('Service', function ($http) {

    functions = {
        post: function (baseUrl, handler, data) {
            return $http({
                url: baseUrl + handler,
                method: 'POST',
                data: (data != undefined) ? JSON.stringify(data) : '',
                contentType: 'application/json'
            });
        },

        readJson: function (fileName) {
            //return $http.get('/meta-data/' + fileName + '.json');
        },

        handleErrors: function (json) {

        }
    }

    return functions;
});