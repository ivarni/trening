(function() {
    angular.module('trening')
    .controller('MainController', ['$scope', '$location', function($scope, $location) {

        $scope.choices = [
            { text: 'Exercises', url: '/exercises' },
            { text: 'Planner' , url: '/planner'}
        ];
        $scope.selected = $scope.choices.filter(function(c) { 
            return c.url === $location.url();
        })[0] || $scope.choices[0];

        $scope.showNavigation = false;

    }]);
})();