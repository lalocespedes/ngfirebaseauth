(function () {
    'use strict';

    // Initialize Firebase
    var config = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: ""
    };

    firebase.initializeApp(config);

    angular
        .module('app', [
            'ui.router',
            'firebase'
        ]);

}());

(function () {

    'use strict';

    angular.module('app')
        .config(stateConfig);

    function stateConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider.state('login', {
            url: '/login',
            templateUrl: '/views/login.html'
        });
    }

})();
