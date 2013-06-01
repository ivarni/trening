(function() {
    angular
    .module('trening.services', [])
    .factory('dataService', [function() {
        return {
            getExercises: function() {
                return [
                    { name: 'Bicepscurl'},
                    { name: 'Rygghev'},
                    { name: 'Knebøy'},
                    { name: 'Brystpress'}
                ];
            }
        }
    }]);
})();