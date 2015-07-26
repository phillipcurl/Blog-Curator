angular
  .module('myApp')
  .controller('GenresCtrl', ['$scope', GenresCtrl]);

  function GenresCtrl($scope){

    $scope.genres = [{
      title: 'All Genres',
      content: 'http://pitchfork.com/reviews/tracks/
                http://hypem.com/popular
                http://www.stereogum.com/music/
                http://consequenceofsound.net/category/check-out/
                http://noisey.vice.com/new-music
      ',
      url: '#/projects/clientportal'
    },
      {
      title: 'Hip Hop/R&B',
      content: 'http://www.hotnewhiphop.com/top100/
                http://2dopeboyz.com/category/audio/singles/
                http://www.westaychill.com/
      ',
      url: '#/projects/clientportal'
    }, {
      title: 'Electronic',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.',
      url: '#/projects/tdwebsite'
    }, {
      title: 'Indie',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.',
      url: '#/projects/clientportal'
    }, {
      title: 'Pop',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.',
      url: '#/projects/clientportal'
    }, {
      title: 'Reggae',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.',
      url: '#/projects/clientportal'
    }, {
      title: 'Rock',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.',
      url: '#/projects/clientportal'
    }];

  }
