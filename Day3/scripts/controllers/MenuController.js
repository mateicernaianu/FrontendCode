hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){

    // TODO #12 - load menu items from Value

    $scope.currentDate = new Date();

    $scope.employeeActionList = employeeActionsService;


}]);
