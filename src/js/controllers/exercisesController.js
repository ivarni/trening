(function() {
    angular.module('trening')
    .controller('ExercisesController', ['$scope', 'dataService', function($scope, dataService) {

        $scope.exercises = dataService.getExercises();
        $scope.selectedExercise = $scope.exercises[0];
        $scope.selectExercise = function(exercise) {
            if (!$scope.showAdd) {
                $scope.selectedExercise = exercise;
            }
        }
        $scope.selected = function(exercise) {
            return exercise === $scope.selectedExercise ? 'selected' : '';
        }
        $scope.deleteExercise = function(exercise) {
            var index = $scope.exercises.indexOf(exercise);
            $scope.exercises.splice(index, 1);
            $scope.selectedExercise = $scope.exercises[( index - 1 < 0 ? 0 : index - 1)];
        }
        $scope.addExercise = function() {
            $scope.showAdd = true;
            $scope.selectedExercise = null;
        }
        $scope.cancelAdd = function() {
            $scope.showAdd = false;
            $scope.newExercise.name = null;
            $scope.newExercise.rm = null;
            $scope.selectedExercise = $scope.exercises[0];
        }
        $scope.saveExercise = function() {
            $scope.showAdd = false;

            var exercise = {
                name: $scope.newExercise.name,
                rm: $scope.newExercise.rm
            };
            $scope.exercises.push(exercise);
            $scope.selectedExercise = exercise;
        }

    }]);
})();