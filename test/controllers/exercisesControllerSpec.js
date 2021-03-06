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

    it('does not select an exercise while adding a new one', function() {
        scope.selectExercise(scope.exercises[1]);
        scope.addExercise();
        scope.selectExercise(scope.exercises[1]);

        expect(scope.showAdd).toBeTruthy();
        expect(scope.selectedExercise).toBeNull();
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

    it('saves a new exercise', function() {
        scope.newExercise = {
            name: 'foo',
            rm: 12
        };
        scope.saveExercise();

        expect(scope.showAdd).toBeFalsy();
        expect(scope.exercises.length).toBe(5);
        expect(scope.exercises[4].name).toBe('foo');
        expect(scope.exercises[4].rm).toBe(12);
        expect(scope.selectedExercise).toBe(scope.exercises[4]);
    });

    it('cancels a save', function() {
        scope.addExercise();
        scope.newExercise = {
            name: 'foo',
            rm: 12
        };        
        scope.cancelAdd();

        expect(scope.showAdd).toBeFalsy();
        expect(scope.newExercise.name).toBeNull();
        expect(scope.newExercise.rm).toBeNull();
        expect(scope.selectedExercise).toBe(scope.exercises[0]);
    });

});