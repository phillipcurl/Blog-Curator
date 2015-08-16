angular
  .module('curatorApp')
  .controller('GenresCtrl', ['$scope', 'Genre', GenresCtrl]);

  function GenresCtrl($scope, Genre){

    $scope.genresList = Genre.getGenres();

  }
