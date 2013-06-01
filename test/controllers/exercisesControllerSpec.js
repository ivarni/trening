describe('Exercises Controller', function () {

    var scope, controller;

    beforeEach(module('trening'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope;
        controller = $controller('ExercisesController', {
            $scope: scope
        });
    }));



    it('selects exercises', function() {
        scope.exercises = [
            { name: 'Excercise 1' },
            { name: 'Excercise 2' },
            { name: 'Excercise 3' },
            { name: 'Excercise 4' }
        ];

        scope.selectExercise(scope.exercises[0]);

        expect(scope.selected(scope.exercises[0])).toEqual('selected');
        expect(scope.selected(scope.exercises[1])).toEqual('');

    });

});