(function() {
    angular.module('trening')
    .controller('MainController', ['$scope', '$location', function($scope, $location) {

        $scope.choices = [
            { text: 'Exercises', url: '/exercises' },
            { text: 'Planner' , url: '/planner'}
        ];
        var selected = selected || $scope.choices[0];

        $scope.navigate = function(choice) {
            selected = choice;
        }

        $scope.active = function (choice) {
            return $location.path() === choice.url ? 'active' : '';
        }

    }]);
})();