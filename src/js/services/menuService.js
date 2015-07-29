angular.module('curatorApp')
	.factory('Menu', [Menu]);

function Menu() {

	// create a new object
	var feedFactory = {};

	var menuItems = [{
    title: 'Home',
    icon: 'fa-home',
    url: '#home',
    isActive: false,
    sidebarClass: ''
  }, {
    title: 'Top 25',
    icon: 'fa-user',
    url: '#about',
    isActive: false,
    sidebarClass: 'red'
  }, {
    title: 'Genres',
    icon: 'fa-cube',
    url: '#genres',
    isActive: false,
    sidebarClass: ''
  }, {
    title: 'View All',
    icon: 'fa-pencil',
    url: '#writing',
    isActive: false,
    sidebarClass: ''
  }];

	// get a single user
	feedFactory.getPigsandPlanes = function() {
		return $http.get('/api/pigsandplanes/');
	};

	// get all users
	feedFactory.all = function() {
		return $http.get('/api/users/');
	};

	// create a user
	feedFactory.create = function(userData) {
		return $http.post('/api/users/', userData);
	};

	// update a user
	feedFactory.update = function(id, userData) {
		return $http.put('/api/users/' + id, userData);
	};

	// delete a user
	feedFactory.delete = function(id) {
		return $http.delete('/api/users/' + id);
	};

	// return our entire feedFactory object
	return feedFactory;

}
