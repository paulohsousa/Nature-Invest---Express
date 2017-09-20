angular.module('primeiraApp').constant('consts', {

  appName: 'Nature Invest',
  version: '1.0',
  owner: 'Cod3r',
  year: '2017',
  site: 'http://natureinvets.org',
  apiUrl: 'http://localhost:3003/api',
  oapiUrl: 'http://localhost:3003/oapi',
  userKey: '_primeira_app_user'

}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
