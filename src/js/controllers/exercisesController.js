(function() {
    angular.module('trening')
    .controller('ExercisesController', ['$scope', 'dataService', function($scope, dataService) {

        $scope.exercises = dataService.getExercises();
        $scope.selectedExercise = $scope.exercises[0];
        $scope.selectExercise = function(exercise) {
            $scope.selectedExercise = exercise;
        }
        $scope.selected = function(exercise) {
            return exercise === $scope.selectedExercise ? 'selected' : '';
        }

    }]);
})();