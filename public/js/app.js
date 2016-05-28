var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
              {
    
    //remove o # da url
    $locationProvider.html5Mode(true);
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'js/views/home.html',
        controller: 'HomeCtrl',
    })
    
    .when('/sobre', {
        templateUrl: 'js/views/sobre.html',
        controller: 'SobreCtrl',
    })
    
    .when('/contato', {
        templateUrl: 'js/views/contato.html',
        controller: 'ContatoCtrl',
    })
    
    .otherwise ({ redirectTo: '/'});
});