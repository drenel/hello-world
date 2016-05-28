app.factory("broadcast", ['$http', function($http) {
    return {
        getPersons: function() {
            return $http({method: 'GET', url: 'http://localhost/friendlistapp/public/api/v1/persons'}).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                return response.data;
            
            });
        }
    }
}])