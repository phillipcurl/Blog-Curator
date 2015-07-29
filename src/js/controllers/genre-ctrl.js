angular
  .module('curatorApp')
  .controller('GenreCtrl', ['$routeParams', 'Genre', GenreCtrl]);

  function GenreCtrl($routeParams, Genre){

    var vm = this;

    var currGenreId = $routeParams.genre_id;

    vm.currGenre = Genre.getGenre(currGenreId);

    vm.blogs = Genre.getBlogsForGenre(vm.currGenre);

  }
