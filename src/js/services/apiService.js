angular.module('curatorApp')
	.factory('Api', ['$http', Api]);

function Api($http) {

	/**
	 * create a apiFactory object
	 */
	var apiFactory = {};

	// $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
  //       .success(function(response) {
  //         $scope.details = response;
  //       });
	//
  //     $http.get("http://www.omdbapi.com/?s=" + $scope.search)
  //       .success(function(response) {
  //         $scope.related = response;
  //       });

	/**
	 * get a feed for a single blog
	 */
	apiFactory.getBlogs = function() {

		$http.get('/api/getblogs')
			.success(function(response) {
				return response.data;
			});
			// .then(function(response) {
			// 	return response.data;
		  // }, function(response) {
		  //   // called asynchronously if an error occurs
		  //   // or server returns response with an error status.
		  // });
	};

	/**
	 * get a feed for a single blog
	 */
	apiFactory.getFeed = function(kimonoId) {
		console.log('getting feed for: ' + kimonoId);
		return $http.get('/api/getfeed/' + kimonoId);
	};

	/**
	 * get a feed for a single, on-demand blog
	 */
	apiFactory.getOnDemand = function(kimonoId, onDemandVal) {
		console.log('getting feed for: ' + kimonoId);
		return $http.get('/api/getondemand/' + kimonoId + '/' + onDemandVal);
	};

	/**
	 * -------------------------------------------------------------------
	 * Functions to make auth calls once we support user accounts
	 * -------------------------------------------------------------------
	 */
	// get all users
	// apiFactory.all = function() {
	// 	return $http.get('/api/users/');
	// };
	//
	// // create a user
	// apiFactory.create = function(userData) {
	// 	return $http.post('/api/users/', userData);
	// };
	//
	// // update a user
	// apiFactory.update = function(id, userData) {
	// 	return $http.put('/api/users/' + id, userData);
	// };
	//
	// // delete a user
	// apiFactory.delete = function(id) {
	// 	return $http.delete('/api/users/' + id);
	// };

	/**
	 * return our entire apiFactory object
	 */
	return apiFactory;

}
