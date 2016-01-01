//https://scotch.io/tutorials/making-skinny-angularjs-controllers
var Goats = angular.module('Goats', []);
angular.module('Goats')
  .controller('GoatsController_bad', ['$scope', '$http', function($scope, $http) {
    $scope.goat = null;
    $scope.editingGoat = false;
    $scope.goatQuery = null;
    $scope.goats = [];

    // Edit a goat database entry
    $scope.editGoat = function(goat) {
      $scope.goat = goat;
      $scope.editingGoat = true;
    };

    // Save a goat database entry
    $scope.saveGoat = function() {
      $http.post('/goats', $scope.goat)
        .then(function() {
          $http.get('/goats')
            .then(function(response) {
              $scope.goat = null;
              $scope.goats = response.data;
              $scope.editingGoat = false;
            });
        });
    };

    // Discard an edit of a goat database entry
    $scope.cancelGoat = function() {
      $scope.editingGoat = false;
    };

    // Search the goat database
    $scope.searchGoats = _.debounce(function(query) {
      $http.get('/goats/search/' + query)
        .then(function(response) {
          $scope.goats = response.data;
        });
    }, 300);

    // Initially load the goats
    $http.get('/goats')
      .then(function(response) {
        $scope.goats = response.data;
      });
  }]);


////////////////////
angular.module('Goats')
  .config(['$stateProvider', function($stateProvider) {
    // List goats state
    $stateProvider
      .state('goats', {
        url: '/goats',
        resolve: {
          goats: ['goatsService',
            function(goatsService) {

              return goatsService.getGoats();
            }],
          goat: function() { return {}; }
        },
        templateUrl: '...',
        controller: 'goatsController',
        controllerAs: 'goats'
      })

      // Search goats state
      .state('search', {
        url: '/goats/search/:query',
        resolve: {
          goats: ['$stateParams', 'goatsService',
            function($stateParams, goatsService) {

              return goatsService.searchGoats($stateParams.query);
            }],
          goat: function() { return {}; }
        },
        templateUrl: '...',
        controller: 'goatsController',
        controllerAs: 'goats'
      })

      // Edit goat state
      .state('goat', {
        url: '/goats/:name',
        resolve: {
          goats: function() { return []; },
          goat: ['$stateParams', 'goatsService',
            function($stateParams, goatsService) {

              return goatsService.getGoat($stateParams.name);
            }]
        },
        templateUrl: '...',
        controller: 'goatsController',
        controllerAs: 'goats'
      });

  }]);



angular.module('Goats')
  .service('GoatsService', ['$http', function($http) {
    this.saveGoat = function(goat) {
      return $http.post('/goats', goat);
    };

    this.searchGoats = function(query) {
      return $http.get('/goats/search/' + query);
    };

    this.getGoats = function() {
      return $http.get('/goats');
    };

    this.getGoat = function(name) {
      return $http.get('/goat/' + name);
    };
  }]);



angular.module('Goats')
  .controller('goatsController', ['$state', 'goatsService', 'goats', 'goat',
    function($state, goatsService, goats, goat) {

      this.goat = goat.data;

      this.goatQuery = $state.params.query;

      this.goats = goats.data;

      this.saveGoat = function() {
        goatsService.saveGoat(this.goat)
          .then(function() {
            $state.go('goats');
          });
      };

      this.searchGoats = function(query) {
        if (!query.length) return $state.go('goats');

        $state.go('search', {query: query});
      };
    }]);

