angular.module('curatorApp')
	.factory('Blog', ['$filter', 'Api', Blog]);

function Blog($filter, Api) {

	// create a new object
	var blogFactory = {};

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
		return Api.getBlogs();
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

		if (onDemand) {
			return Api.getOnDemand(id, odVal);
		} else {
			return Api.getFeed(id);
		}
	};

	// return our entire apiFactory object
	return blogFactory;
}
