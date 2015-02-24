/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2014 Webapplayers.com
 *
 */

function underscore(){
    return window._;
};

/**
 * pageTitle - Directive for set Page title - mata title
 */
function pageTitle($rootScope, $timeout) {
  return {
    link: function(scope, element) {
      var listener = function(event, toState, toParams, fromState, fromParams) {
        // Default title - load on Dashboard 1
        var title = 'MyTravelCharter';
        // Create your own title pattern
        if (toState.data && toState.data.pageTitle) title = 'MyTravelCharter | ' + toState.data.pageTitle;
        $timeout(function() {
          element.text(title);
        });
      };
      $rootScope.$on('$stateChangeStart', listener);
    }
  }
};

/**
 * sideNavigation - Directive for run metsiMenu on sidebar navigation
 */
function sideNavigation() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      // Call the metsiMenu plugin and plug it to sidebar navigation
      element.metisMenu();
    }
  };
};

/**
 * iboxTools - Directive for iBox tools elements in right corner of ibox
 */
function iboxTools($timeout) {
  return {
    restrict: 'A',
    scope: true,
    templateUrl: 'views/common/ibox_tools.html',
    controller: function ($scope, $element) {
      // Function for collapse ibox
      $scope.showhide = function () {
        var ibox = $element.closest('div.ibox');
        var icon = $element.find('i:first');
        var content = ibox.find('div.ibox-content');
        content.slideToggle(200);
        // Toggle icon from up to down
        icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        $timeout(function () {
          ibox.resize();
          ibox.find('[id^=map-]').resize();
        }, 50);
      },
      // Function for close ibox
      $scope.closebox = function () {
        var ibox = $element.closest('div.ibox');
        ibox.remove();
      };
    }
  };
};

/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function minimalizaSidebar($timeout) {
  return {
    restrict: 'A',
    template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
    controller: function ($scope, $element) {
      $scope.minimalize = function () {
        $("body").toggleClass("mini-navbar");
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
          // Hide menu in order to smoothly turn on when maximize menu
          $('#side-menu').hide();
          // For smoothly turn on menu
          $timeout(function () {
            $('#side-menu').fadeIn(500);
          }, 100);
        } else {
          // Remove all inline style from jquery fadeIn function to reset menu state
          $('#side-menu').removeAttr('style');
        }
      }
    }
  };
};

/**
 * debugTools
 */
function debugTools(){
  return {
    restrict: 'E',
    templateUrl: 'views/common/debug_tools.html'
  };
};

/**
 * showEditDelete
 */
function showEditDelete() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'views/common/show_edit_delete.html',
  };
};

keyBind = ['keyCodes', function (keyCodes) {
    function map(obj) {
        var mapped = {};
        for (var key in obj) {
            var action = obj[key];
            if (keyCodes.hasOwnProperty(key)) {
                mapped[keyCodes[key]] = action;
            }
        }
        return mapped;
    }

    return function (scope, element, attrs) {
        var bindings = map(scope.$eval(attrs.keyBind));
        element.bind("keydown keypress", function (event) {
            if (bindings.hasOwnProperty(event.which)) {
                scope.$apply(function() {
                     scope.$eval(bindings[event.which])
                     event.preventDefault;
                    event.stopPropagation();
                });
            }
        });
    };
}];

function ngEnterOrTabOut(){
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if(event.keyCode == 13 || event.keyCode == 9) {
        scope.$apply(function(){
          alert("ssdfffgs");
          scope.$eval(attrs.ngEnterOrTabOut, {'event': event});
        });
        event.preventDefault();
      }
    });
  };
};

function ngTimeout($parse, $timeout) {
  var timeout = 1000;
  return function(scope, elem, attrs) {
    var element = angular.element(elem)[0];
    var currentTimeout = null;

    element.onkeypress = function() {
      //alert("sdd");
      var model = $parse(attrs.timeoutFunction);
      var poster = model(scope);
      if(currentTimeout) $timeout.cancel(currentTimeout);
      currentTimeout = $timeout(function(){
        poster();
      }, timeout)
    };
  };
};

/**
 *
 * Constants
 */

var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  backspace: 8,
  shift: 16,
  ctrl: 17,
  alt: 18,
  capslock: 20,
  numlock: 144
}

/**
 *
 * Pass all functions into module
 */
angular
  .module('inspinia')
    .factory('_', underscore)
    .directive('pageTitle', pageTitle)
    .directive('sideNavigation', sideNavigation)
    .directive('iboxTools', iboxTools)
    .directive('minimalizaSidebar', minimalizaSidebar)
    .directive('debugTools', debugTools)
    .directive('showEditDelete', showEditDelete)
    .directive('ngTimeout', ngTimeout)
    .directive('ngEnterOrTabOut', ngEnterOrTabOut)
    .directive('keyBind', keyBind)
    .constant('keyCodes',keyCodes)
