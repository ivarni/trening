(function() {
    angular.module('trening')
    .controller('ExercisesController', ['$scope', 'dataService', function($scope, dataService) {

        $scope.exercises = dataService.getExercises();

    }]);
})();