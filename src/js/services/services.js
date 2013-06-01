(function() {
    angular
    .module('trening.services', [])
    .factory('dataService', [function() {
        return {
            getExercises: function() {
                return [
                    { name: 'Bicepscurl', rm: 12 },
                    { name: 'Rygghev', rm: 10 },
                    { name: 'Knebøy', rm: 60 },
                    { name: 'Brystpress', rm: 50 }
                ];
            }
        }
    }]);
})();