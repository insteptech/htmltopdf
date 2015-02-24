'use strict';

var module = angular.module('mtc.reports', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/reports', {
      templateUrl: 'components/reports/index.html',
      controller: 'ReportController'
    })
    .when('/reports/html/:id', {
      templateUrl: function(params){
        return 'components/reports/html/' + params.id + '.html'
      },
      controller: false
    })
    .otherwise({
        redirectTo: '/reports'
      })
    ;
}])

module.controller('ReportController', ['$scope', function($scope){

  $scope.print = function(){
    alert("send sample html to server and display PDF!");
  };

}]);