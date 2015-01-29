'use strict'

app = angular.module 'angularParseBoilerplate', [
  'ng'
  'ngResource'
  'ui.router'
  'ui.bootstrap'
  'app.templates'
  'angulartics'
  'angulartics.google.analytics'
]

app.config (
  $locationProvider
  $stateProvider
  $urlRouterProvider
) ->

  $locationProvider.hashPrefix '!'

  $stateProvider
  .state 'task',
    url: '/:locale'
    controller: 'TaskCtrl'
    templateUrl: 'task.html'

  $urlRouterProvider.otherwise '/fr'

app.run ($rootScope, $state) ->
  $rootScope.$state = $state
