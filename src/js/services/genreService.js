angular.module('curatorApp')
	.factory('Genre', ['$filter', 'Blog', Genre]);

function Genre($filter, Blog) {

	// create a new object
	var genreFactory = {};

	genreFactory.genres = [{
		title:   'All Genres',
		id: 		 'all',
		icon:		 'music'
	}, {
		title:   'Hip Hop/R&B',
		id: 	 	 'hiprb',
		icon:		 'rocket'
	}];

	/**
	 *
	 */
	genreFactory.getGenre = function(id) {
		return $filter('filter')(genreFactory.genres, function (d) {return d.id === id;})[0];
	}

	/**
	 *
	 */
	genreFactory.getGenres = function() {
		return genreFactory.genres;
	}

	/**
	 *
	 */
	genreFactory.getBlogsForGenre = function(id) {
		return Blog.getBlogsForGenre(id);
	}

	// return our entire feedFactory object
	return genreFactory;

}
