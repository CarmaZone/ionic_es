var ionicEsApp = angular.module('ionicEsApp', [
    'ngRoute',
    'ngResource',
    'ionicEsController',
    'ionicEsFactory'
]);

ionicEsApp.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);

ionicEsApp.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'templates/content-principal.html',
        //controller: 'IonicEsController'
    }).
    when('/general', {
        templateUrl: 'templates/general/content-general.html',
        controller: 'IonicEsController'
    }).
    when('/css', {
        templateUrl: 'templates/general/content-css.html',
        //controller: 'IonicEsController'
    }).
    when('/js', {
        templateUrl: 'templates/general/content-js.html',
        //controller: 'IonicEsController'
    }).
    when('/guia', {
        templateUrl: 'templates/general/content-guia.html',
        //controller: 'IonicEsController'
    }).
    when('/faq', {
        templateUrl: 'templates/general/content-faq.html',
        //controller: 'IonicEsController'
    }).
    when('/demos', {
        templateUrl: 'templates/general/content-demos.html',
        //controller: 'IonicEsController'
    }).
    when('/nav_rut1', {
        templateUrl: 'templates/formulas/navegacion-rutas1.html',
        //controller: 'IonicEsController'
    }).
    when('/nav_rut2', {
        templateUrl: 'templates/formulas/navegacion-rutas2.html',
        //controller: 'IonicEsController'
    }).
    otherwise({
        redirectTo: '/'
    });

});
