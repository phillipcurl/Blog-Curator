/**
 * Master Controller
 */

angular.module('curatorApp')
  .controller('MasterCtrl', ['$scope', '$timeout', '$cookieStore', MasterCtrl]);

/**
 * Sidebar Toggle, Menu Generation, and Cookie Control
 * @param {[type]} $scope       [description]
 * @param {[type]} $timeout     [description]
 * @param {[type]} $cookieStore [description]
 */
function MasterCtrl($scope, $timeout, $cookieStore) {

  var vm = this;

  /**
   * This sets the width that the sidebar is automatically toggled unless the
   * user has manually toggled it themselves
   */
  var mobileView = 992;

  /**
   * [if description]
   * @param  {Boolean} angular.isDefined($cookieStore.get('showAlerts' [description]
   * @return {[type]}                                                  [description]
   */
  if (angular.isDefined($cookieStore.get('showAlerts'))) {
    vm.showAlerts = !$cookieStore.get('showAlerts') ? false : true;
  } else {
    vm.showAlerts = true;
  }

  /**
   * [pageTitle description]
   * @type {String}
   */
  vm.pageTitle = 'Home';

  /**
   * [currSidebarClass description]
   * @type {String}
   */
  vm.currSidebarClass = 'class';

  /**
   * The collection of menuItems used in the sidenav
   * @param title {string}
   * @type {Array of menuItems}
   */
  vm.menuItems = [{
    title: 'Home',
    icon: 'fa-home',
    url: 'home',
    isActive: false,
    sidebarClass: ''
  }, {
    title: 'Top 25',
    icon: 'fa-user',
    url: 'about',
    isActive: false,
    sidebarClass: 'red'
  }, {
    title: 'Genres',
    icon: 'fa-cube',
    url: 'genres',
    isActive: false,
    sidebarClass: ''
  }, {
    title: 'View All',
    icon: 'fa-pencil',
    url: 'blogs',
    isActive: false,
    sidebarClass: ''
  }];

  /**
   * [$timeout description]
   * @param  {[type]} function( [description]
   * @return {num}           the timeout value for the alert fade. 5s
   */
  $timeout(function() {
    vm.showAlerts = false;
    $cookieStore.put('showAlerts', vm.showAlerts);
  }, 5000);

  vm.getWidth = function() {
    return window.innerWidth;
  };

  $scope.$watch(vm.getWidth, function(newValue, oldValue) {
    if (newValue >= mobileView) {
      if (angular.isDefined($cookieStore.get('toggle'))) {
        vm.toggle = !$cookieStore.get('toggle') ? false : true;
      } else {
        vm.toggle = true;
      }
    } else {
      vm.toggle = false;
    }

  });

  /**
   * Toggle the sidebar and save the toggle value in a cookie
   */
  vm.toggleSidebar = function() {
    vm.toggle = !vm.toggle;
    $cookieStore.put('toggle', vm.toggle);
  };

  /**
   * Called when a menu item in the sidebar is clicked.
   * Set the sidebarClass to the sidebarClass value of the menuItem being clicked
   * Set the isActive value to true for the current menuItem
   * Change the global title value to the value of the current menuItem's title
   * @param  {$index} the index of the menuItem that was clicked
   */
  vm.menuClick = function(index) {
    var currItem = vm.menuItems[index];
    vm.currSidebarClass = currItem.sidebarClass;
    currItem.isActive = true;
    vm.pageTitle = currItem.title;
  };

  /**
   * Re-bind the scope when the window is resized
   *
   * TODO: add a fallback call param to the $apply call. This is probably unnecessary
   * since an onresize call isn't likely to trigger an exception, but rebinding might,
   * so it can't hurt. This fallback function is wrapped in a finally block so it will
   * be called regardless. Be careful that the function I write respects that fact
   */
  window.onresize = function() {
    $scope.$apply();
  };
}
