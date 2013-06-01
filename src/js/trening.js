(function() {
    angular
    .module('trening', ['trening.services'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/exercises', {
            templateUrl: 'templates/exercises.html',
            controller: 'ExercisesController'
        });
        $routeProvider.when('/planner', {
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });        
        $routeProvider.otherwise({ redirectTo: '/' });
    }])
})();