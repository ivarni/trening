(function() {
    angular
    .module('trening', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/exercises', {
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
        $routeProvider.when('/planner', {
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });        
        $routeProvider.otherwise({ redirectTo: '/' });
    }])
})();