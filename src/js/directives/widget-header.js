/**
 * Widget Header Directive
 */

angular
  .module('curatorApp')
  .directive('rdWidgetHeader', rdWidgetTitle);

function rdWidgetTitle() {
  var directive = {
    requires: '^rdWidget',
    scope: {
      title: '@',
      icon: '@'
    },
    transclude: true,
    template: '<div class="widget-header clearfix"><div class="pull-left"><h5><i class="fa" ng-class="icon"></i> {{title}}</h5> </div><div class="pull-right" ng-transclude></div></div>',
    restrict: 'E'
  };
  return directive;
};