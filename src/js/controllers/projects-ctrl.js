/**
 * Alerts Controller
 */

angular
  .module('myApp')
  .controller('ProjectsCtrl', ['$scope', ProjectsCtrl]);

function ProjectsCtrl($scope) {
  // $scope.oneAtATime = true;

  $scope.projects = [{
    title: 'TeamDynamix Client Portal',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.',
    url: '#/projects/clientportal'
  }, {
    title: 'TeamDynamix Website',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.',
    url: '#/projects/tdwebsite'
  }, {
    title: 'Minetta Realty',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.',
    url: '#/projects/clientportal'
  }, {
    title: 'Blog Filtering App',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.',
    url: '#/projects/clientportal'
  }, {
    title: 'Dynamic Group Header - 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.',
    url: '#/projects/clientportal'
  }, {
    title: 'Dynamic Group Header - 6',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.',
    url: '#/projects/clientportal'
  }];

  // $scope.items = ['Item 1', 'Item 2', 'Item 3'];
  //
  // $scope.addItem = function() {
  //   var newItemNo = $scope.items.length + 1;
  //   $scope.items.push('Item ' + newItemNo);
  // };
  //
  // $scope.status = {
  //   isFirstOpen: true,
  //   isFirstDisabled: false
  // };
}
