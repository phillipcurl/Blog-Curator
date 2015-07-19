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
    content: 'Dynamic Group Body - 1',
    url: '#/projects/clientportal'
  }, {
    title: 'TeamDynamix Website',
    content: 'Dynamic Group Body - 2',
    url: '#/projects/tdwebsite'
  }, {
    title: 'Dynamic Group Header - 3',
    content: 'Dynamic Group Body - 3',
    url: '#/projects/clientportal'
  }, {
    title: 'Dynamic Group Header - 4',
    content: 'Dynamic Group Body - 4',
    url: '#/projects/clientportal'
  }, {
    title: 'Dynamic Group Header - 5',
    content: 'Dynamic Group Body - 5',
    url: '#/projects/clientportal'
  }, {
    title: 'Dynamic Group Header - 6',
    content: 'Dynamic Group Body - 6',
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