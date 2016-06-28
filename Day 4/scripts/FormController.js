/**
 * Created by user on 6/28/2016.
 */
Appl.controller('FormController',['$scope',function($scope) {
    $scope.submit = function()
    {
        console.log($scope.myForm.$valid);
        if ($scope.myForm.$valid) {
            window.alert("Valid");
        }
    }
}]);

