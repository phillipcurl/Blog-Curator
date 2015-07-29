angular.module('curatorApp')
	.factory('Feed', ['$http', Feed]);

function Feed($http) {

	// create a new object
	var feedFactory = {};

	// get a feed for a single blog
	feedFactory.getFeed = function(kimonoId) {
		console.log('getting feed for: ' + kimonoId);
		return $http.get('/api/getfeed/' + kimonoId);
	};

	// get all users
	feedFactory.getOnDemand = function(kimonoId, onDemandVal) {
		console.log('getting feed for: ' + kimonoId);
		return $http.get('/api/getondemand/' + kimonoId + '/' + onDemandVal);
	};

	// get all users
	// feedFactory.all = function() {
	// 	return $http.get('/api/users/');
	// };
	//
	// // create a user
	// feedFactory.create = function(userData) {
	// 	return $http.post('/api/users/', userData);
	// };
	//
	// // update a user
	// feedFactory.update = function(id, userData) {
	// 	return $http.put('/api/users/' + id, userData);
	// };
	//
	// // delete a user
	// feedFactory.delete = function(id) {
	// 	return $http.delete('/api/users/' + id);
	// };

	// return our entire feedFactory object
	return feedFactory;

}
