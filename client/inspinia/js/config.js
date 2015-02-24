/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2014 Webapplayers.com
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
  //$urlRouterProvider.otherwise("/dashboard/shortcuts");
  $urlRouterProvider.otherwise("/reservations");
  $stateProvider
    //.state('shortcuts', {
      //url: "/dashboard/shortcuts",
      //templateUrl: "views/dashboard/shortcuts.html",
      //data: { pageTitle: 'Shortcuts' }
    //})
    .state('login', {
      url: "/login",
      templateUrl: "login.html",
      controller: "AuthCtrl",
      data: { pageTitle: 'Login' }
    })
    //.state('aggregation', {
      //url: "aggregation/:id",
      //data: { pageTitle: 'aggregation' }
    //})
  var models = [
    //"agencies?sp_code",
    //"aircrafts?type&name",
    //"airlines?carrier_code",
    //"airports?iata_code",
    //"charters?sp_code",
    //"commissions?start_date&end_date",
    //"flights?flight_number",
    //"payments?reference",
    //"reports?alias",
    "reservations?token&last_name&first_name&birthday"
    //"users?email"
  ];
  for(var i=0; i<models.length; i++){
    var model = models[i].split("?")[0];
    var singularizedUppercaseModel = model.charAt(0).toUpperCase() + model.slice(1, -1);
    var ctrl = singularizedUppercaseModel + "Ctrl";
    $stateProvider
      .state(model, {
        url: "/" + models[i],
        templateUrl: "views/" + model + "/index.html",
        controller: ctrl,
        data: { pageTitle: "List " + model }
      })
      .state(model + '_new', {
        url: "/" + model + "/new",
        templateUrl: "views/" + model + "/new.html",
        controller: ctrl,
        data: { pageTitle: 'New ' + model }
      })
      .state(model + '_edit', {
        url: "/" + model + "/:id/edit",
        templateUrl: "views/" + model + "/edit.html",
        controller: ctrl,
        data: { pageTitle: 'Edit ' + model }
      })
  };
};

angular
  .module('inspinia')
  .config(config)
  .run(function($rootScope, $state) {
    $rootScope.$state = $state;
  });