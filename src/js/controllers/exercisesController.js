(function() {
    angular.module('trening')
    .controller('ExercisesController', ['$scope', 'dataService', function($scope, dataService) {

        $scope.selectedExercise = null;
        $scope.exercises = dataService.getExercises();
        $scope.selectExercise = function(exercise) {
            $scope.selectedExercise = exercise;
        }
        $scope.selected = function(exercise) {
            return exercise === $scope.selectedExercise ? 'selected' : '';
        }

    }]);
})();