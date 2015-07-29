angular.module('curatorApp')
	.factory('Blog', ['$filter', 'Feed', Blog]);

function Blog($filter, Feed) {

	// create a new object
	var blogFactory = {};

	blogFactory.blogs = [{
    name: 'Pigeons & Planes',
    viewUrl: 'pigeonsandplanes',
    kimonoId: 'd3cthg28',
		isOnDemand: false,
		onDemandVal: '',
    genre: 'hiprb',
    extUrl: 'https://www.pigeonsandplanes.com'
  }, {
		name: 'Hypem - Most Popular',
    viewUrl: 'pigeonsandplanes',
    kimonoId: 'cpgc2cp6',
		isOnDemand: true,
		onDemandVal: 'popular',
    genre: 'all',
    extUrl: 'https://www.hypem.com/popular'
  }];

	/**
	 *
	 */
	blogFactory.getBlog = function(id) {
		return $filter('filter')(blogFactory.blogs, function (d) {return d.kimonoId === id;})[0];
	}

	/**
	 *
	 */
	blogFactory.getBlogs = function() {
		return blogFactory.blogs;
	}

	/**
	 *
	 */
	blogFactory.getBlogsForGenre = function(genre) {
		return $filter('filter')(blogFactory.blogs, function (d) {return d.genre === genre;});
	}

	/**
	 *
	 */
	blogFactory.getBlogFeed = function(id, onDemand, odVal) {

		var feed;

		if (onDemand) {
			feed = Feed.getOnDemand(id, odVal);
		} else {
			feed = Feed.getFeed(id);
		}

		return feed;
	};

	// return our entire feedFactory object
	return blogFactory;

}
