angular
  .module('curatorApp')
  .controller('GenreCtrl', ['$scope', '$routeParams', 'Genre', GenreCtrl]);

  function GenreCtrl($scope, $routeParams, Genre){

    var currGenreId = $routeParams.genre_id;

    $scope.currGenre = Genre.getGenre(currGenreId);

    $scope.blogs = Genre.getBlogsForGenre(currGenreId);

  }
