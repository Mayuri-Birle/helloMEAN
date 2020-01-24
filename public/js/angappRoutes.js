angular.module('angappRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider

        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })

        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/add', {
            templateUrl: 'views/add.html',
            controller: 'AddController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        });
    
    $locationProvider.html5Mode(true);
}]);