/**
 * Created by user on 6/27/2016.
 */

hrApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.
        when('/main', {
            templateUrl: '../views/main.html',
            controller: 'MainController'
        })
            .when('/numbers', {
                redirectTo: '/math'
        })
            .when('/math', {
                templateUrl: 'views/demo/math.html',
                controller: 'MathController'
            })

            .when('/demoRequest', {
                templateUrl: 'views/demo/request.html',
                controller: 'RequestController'
            })


            .when('/employeeslist', {
            templateUrl: 'views/employeelist.html',
            controller: 'EmployeeListController'
        })
            .when('/employeeview/:employeeid', {
                templateUrl: 'views/employeeview.html',
                controller: 'EmployeeViewController'
            })
            .otherwise({
                redirectTo: '/main'
            })
        ;

    }]);