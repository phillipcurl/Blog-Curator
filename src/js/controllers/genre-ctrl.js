angular
  .module('curatorApp')
  .controller('GenresCtrl', ['$routeParams', 'Blog', GenresCtrl]);

  function GenresCtrl($routeParams, Blog){

    var vm = this;

    vm.currGenreName = $routeParams.genre_name;

    vm.blogs = Blog.getBlogsForGenre(vm.currGenre);

  }
