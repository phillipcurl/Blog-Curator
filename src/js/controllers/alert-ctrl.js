/**
 * Alerts Controller
 */

angular
  .module('myApp')
  .controller('AlertsCtrl', ['$scope', AlertsCtrl]);

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

  $scope.addAlert = function() {
    $scope.alerts.push({
      msg: 'Another alert!'
    });
  };

  $scope.closeAlert = function(index) {
    var currAlert = $scope.alerts[index];
    currAlert.wasClosed = false;
    $scope.alerts.splice(index, 1);
  };
}
