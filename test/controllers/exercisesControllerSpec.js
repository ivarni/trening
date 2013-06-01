describe('Exercises Controller', function () {

    var scope, controller;

    beforeEach(module('trening'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope;

        scope.exercises = [
            { name: 'Excercise 1' },
            { name: 'Excercise 2' },
            { name: 'Excercise 3' },
            { name: 'Excercise 4' }
        ];

        controller = $controller('ExercisesController', {
            $scope: scope
        });
    }));



    it('selects exercises', function() {
        scope.selectExercise(scope.exercises[0]);

        expect(scope.selected(scope.exercises[0])).toEqual('selected');
        expect(scope.selected(scope.exercises[1])).toEqual('');
    });

    it('deletes exercises', function() {
        scope.deleteExercise(scope.exercises[0]);

        expect(scope.exercises.length).toBe(3);
        expect(scope.selectedExercise).toBe(scope.exercises[0]);

        scope.deleteExercise(scope.exercises[2]);

        expect(scope.exercises.length).toBe(2);
        expect(scope.selectedExercise).toBe(scope.exercises[1]);        
    });

    it('shows the add exercise input', function() {
        scope.addExercise();

        expect(scope.showAdd).toBeTruthy();
        expect(scope.selectedExercise).toBeNull();
    });

});