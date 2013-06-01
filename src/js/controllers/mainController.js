(function() {
    angular.module('trening')
    .controller('MainController', ['$scope', '$location', function($scope, $location) {

        $scope.menuItems = [
            { url: "#/exercises", name: "Exercies" },
            { url: "#/planner", name: "Planner" }
        ];
        $scope.selected = function(item) {
            return $location.path() === item.url.substring(1) ? 'selected' : '';
        }


    }]);
})();