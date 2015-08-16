angular
  .module('curatorApp')
  .controller('BlogsCtrl', ['$scope', 'Blog', BlogsCtrl]);

function BlogsCtrl($scope, Blog){

  $scope.blogsList = Blog.getBlogs();

  // Blog.getBlog($routeParams.blog_id)
  //   .success(function(data)) {
  //     vm.blogsList = data;
  //   });

  // grab all the users at page load
	// Feed.getPigsandPlanes()
	//  .success(function(data) {
  //     vm.blogFeed = data;
  //   });

}
