/**
 * Alerts Controller
 */

angular
  .module('curatorApp')
  .controller('AlertsCtrl', ['$scope', AlertsCtrl]);

/**
 * [AlertsCtrl description]
 * @param {[type]} $scope [description]
 */
function AlertsCtrl($scope) {
  $scope.alerts = [{
      type: 'info',
      msg: 'Thanks for visiting!',
      wasClosed: false
    }
    // , {
    //     type: 'danger',
    //     msg: 'Found a bug? Create an issue with as many details as you can.'
    // }
  ];

  /**
   * Add an alert to the alerts Array
   * TODO: THIS IS CURRENTLY UNUSED
   */
  $scope.addAlert = function() {
    $scope.alerts.push({
      msg: 'Another alert!'
    });
  };

  /**
   * [function description]
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  $scope.closeAlert = function(index) {
    var currAlert = $scope.alerts[index];
    currAlert.wasClosed = false;
    $scope.alerts.splice(index, 1);
  };
}
