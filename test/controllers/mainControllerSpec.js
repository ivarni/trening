describe('Main Controller', function () {

    var scope, controller, browser, url;

    beforeEach(module('trening'));

    beforeEach(inject(function($rootScope, $controller, $browser) {
        scope = $rootScope;
        browser = $browser;
        controller = $controller('MainController', {
            $scope: scope,
            $location: {
                path: function() { return url; }
            }
        });
    }));

    it('determines if a menuItem is selected based on browser URL', function() {
        url = scope.menuItems[0].url.substring(1);
        expect(scope.selected(scope.menuItems[0])).toEqual('selected');
        expect(scope.selected(scope.menuItems[1])).toEqual('');

        url = scope.menuItems[1].url.substring(1);
        expect(scope.selected(scope.menuItems[0])).toEqual('');
        expect(scope.selected(scope.menuItems[1])).toEqual('selected');        
    });

});