hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup','EmployeeService','DepartmentService','JobService',
    function ($scope, $http, $routeParams, $location, commonResourcesFactoryBackup, EmployeeService, DepartmentService, JobService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        EmployeeService.findAll()
            .then(function (res) {
                $scope.managers = res.data;
                console.log($scope.managers[1]);
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });


        JobService.findAll()
            .then(function (res) {
                $scope.jobs = res.data;
                console.log($scope.jobs);
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        DepartmentService.findAll()
            .then(function (res) {
                $scope.departments = res.data;
                console.log($scope.departments[0]);
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: commonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        
        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);