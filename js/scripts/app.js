var ionicEsApp = angular.module('ionicEsApp', [
    'ngRoute',
    'ionicEsController'
]);

ionicEsApp.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'templates/content-principal.html',
        //controller: 'IonicEsController'
    }).
    when('/general', {
        templateUrl: 'templates/content-general.html',
        //controller: 'IonicEsController'
    }).
    when('/css', {
        templateUrl: 'templates/content-css.html',
        //controller: 'IonicEsController'
    }).
    when('/js', {
        templateUrl: 'templates/content-js.html',
        //controller: 'IonicEsController'
    }).
    when('/guia', {
        templateUrl: 'templates/content-guia.html',
        //controller: 'IonicEsController'
    }).
    when('/faq', {
        templateUrl: 'templates/content-faq.html',
        //controller: 'IonicEsController'
    }).
    when('/demos', {
        templateUrl: 'templates/content-demos.html',
        //controller: 'IonicEsController'
    }).
    otherwise({
        redirectTo: '/'
    });
});
