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
    genre: 'general',
    extUrl: 'https://www.pigeonsandplanes.com'
  }, {
		name: 'Hypem - Most Popular',
    viewUrl: 'pigeonsandplanes',
    kimonoId: 'cpgc2cp6',
		isOnDemand: true,
		onDemandVal: 'popular',
    genre: 'general',
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
		return $filter('filter')(blogFactory.blogs, function (d) {return d.genre === genre;})[0];
	}

	/**
	 *
	 */
	blogFactory.getBlogFeed = function(id, onDemand, odVal) {

		var feed = {};

		if (onDemand) {
			Feed.getOnDemand(id, odVal)
				.success(function(data) {
					feed = data;
				});
			return feed;
		} else {
			Feed.getFeed(id)
				.success(function(data) {
					feed = data;
				});
			return feed;
		}
	};

	// return our entire feedFactory object
	return blogFactory;

}
