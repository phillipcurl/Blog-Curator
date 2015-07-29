angular
  .module('curatorApp')
  .controller('GenresCtrl', ['Blog', GenresCtrl]);

  function GenresCtrl(Blog){

    var vm = this;

    vm.genres = [{
      title:   'All Genres',
      content: 'http://pitchfork.com/reviews/tracks/
                http://hypem.com/popular
                http://www.stereogum.com/music/
                http://consequenceofsound.net/category/check-out/
                http://noisey.vice.com/new-music',
      url:      '#/projects/clientportal'
    },
      {
      title:   'Hip Hop/R&B',
      content: 'http://www.hotnewhiphop.com/top100/
                http://2dopeboyz.com/category/audio/singles/
                http://www.westaychill.com/',
      url:      '#/projects/clientportal'
    }];

  }
