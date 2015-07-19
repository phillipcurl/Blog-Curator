/**
 * Master Controller
 */

angular.module('myApp')
  .controller('MasterCtrl', ['$scope', '$timeout', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $timeout, $cookieStore) {
  /**
   * Sidebar Toggle & Cookie Control
   */
  var mobileView = 992;

  if (angular.isDefined($cookieStore.get('showAlerts'))) {
    $scope.showAlerts = !$cookieStore.get('showAlerts') ? false : true;
  } else {
    $scope.showAlerts = true;
  }

  $scope.pageTitle = 'Home';

  $scope.currSidebarClass = 'class';

  $scope.menuItems = [{
    title: 'Home',
    icon: 'fa-home',
    url: '#home',
    isActive: false,
    sidebarClass: ''
  }, {
    title: 'About',
    icon: 'fa-user',
    url: '#about',
    isActive: false,
    sidebarClass: 'red'
  }, {
    title: 'Projects',
    icon: 'fa-cube',
    url: '#projects',
    isActive: false,
    sidebarClass: ''
  }, {
    title: 'Writing',
    icon: 'fa-pencil',
    url: '#writing',
    isActive: false,
    sidebarClass: ''
  }];

  $timeout(function() {
    $scope.showAlerts = false;
    $cookieStore.put('showAlerts', $scope.showAlerts);
  }, 5000);

  $scope.getWidth = function() {
    return window.innerWidth;
  };

  $scope.$watch($scope.getWidth, function(newValue, oldValue) {
    if (newValue >= mobileView) {
      if (angular.isDefined($cookieStore.get('toggle'))) {
        $scope.toggle = !$cookieStore.get('toggle') ? false : true;
      } else {
        $scope.toggle = true;
      }
    } else {
      $scope.toggle = false;
    }

  });

  $scope.toggleSidebar = function() {
    $scope.toggle = !$scope.toggle;
    $cookieStore.put('toggle', $scope.toggle);
  };

  $scope.menuClick = function(menuItem) {
    //var currItem = $scope.menuItems[index];
    $scope.currSidebarClass = menuItem.sidebarClass;
    menuItem.isActive = true;
    $scope.pageTitle = menuItem.title;
  };

  window.onresize = function() {
    $scope.$apply();
  };
}
