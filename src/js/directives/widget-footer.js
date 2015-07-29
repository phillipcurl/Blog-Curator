/**
 * Widget Footer Directive
 */

angular
  .module('curatorApp')
  .directive('rdWidgetFooter', rdWidgetFooter);

function rdWidgetFooter() {
  var directive = {
    requires: '^rdWidget',
    scope: {
      classes: '@?'
    },
    transclude: true,
    template: '<div class="widget-footer" ng-class="classes" ng-transclude></div>',
    restrict: 'E'
  };
  return directive;
};