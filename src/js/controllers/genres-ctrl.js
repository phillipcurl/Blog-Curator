angular
  .module('curatorApp')
  .controller('GenresCtrl', ['Genre', GenresCtrl]);

  function GenresCtrl(Genre){

    var vm = this;

    vm.genresList = Genre.getGenres();

  }
