var Appl = angular.module('Appl',['ngRoute']);

Appl.config(['$routeProvider',function($routeProvider){

    $routeProvider
        . when('/colors', {
        templateUrl: 'views/colors.html',
        controller: 'ColorsController'
    })
        .when('/forms', {
            templateUrl: 'views/forms.html',
            controller: 'FormController'
        })

}]);
