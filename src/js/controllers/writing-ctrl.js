/**
 * Alerts Controller
 */

angular
  .module('myApp')
  .controller('WritingCtrl', ['$scope', WritingCtrl]);

function WritingCtrl($scope) {
  $scope.oneAtATime = true;

  $scope.essays = [{
    title: 'Essay Title - 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
    ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
    cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id
    est laborum.
    '
  }, {
    title: 'Essay Title - 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
    ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
    cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id
    est laborum.
    '
  }, {
    title: 'Essay Title - 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
    ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
    cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id
    est laborum.
    '
  }, {
    title: 'Essay Title - 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
    ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
    cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id
    est laborum.
    '
  }, {
    title: 'Essay Title - 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
    ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
    cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id
    est laborum.
    '
  }, {
    title: 'Essay Title - 6',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
    ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
    cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id
    est laborum.
    '
  }, {
    title: 'Essay Title - 7',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
    ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
    cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id
    est laborum.
    '
  }];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
}