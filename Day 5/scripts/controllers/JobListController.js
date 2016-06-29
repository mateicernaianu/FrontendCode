/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    function ($scope, $http, $location, CommonResourcesFactoryBackup) {

        $scope.jobs = [];


        $http({url: CommonResourcesFactoryBackup.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        $scope.viewJob = function (jobId) {
            $location.url('/jobView/' + jobId);
        };

        $scope.editJob = function(jobId) {
            $location.url('/jobEdit/' + jobId);
        };

        $scope.deleteEmployee = function (jobId) {
            $http({url: CommonResourcesFactoryBackup.addJobUrl + '/' + jobId, method: 'DELETE'})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobList');
                });
        };
}]);