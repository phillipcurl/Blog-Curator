angular
  .module('curatorApp')
  .controller('BlogCtrl', ['$scope', '$routeParams', 'Blog', BlogCtrl]);

function BlogCtrl($scope, $routeParams, Blog){

  var currBlogId = $routeParams.blog_id;

  $scope.currBlog = Blog.getBlog(currBlogId);


  // grab all the users at page load


  $scope.blogFeed = Blog.getBlogFeed(vm.currBlog.kimonoId, vm.currBlog.isOnDemand, vm.currBlog.onDemandVal);

  // Blog.getBlog($routeParams.blog_id)
  //   .success(function(data)) {
  //     vm.currBlog = data;
  //   });

  // grab all the users at page load
	// Blog.getBlogFeed(vm.currBlog)
	//  .success(function(data) {
  //     vm.blogFeed = data;
  //   });

}
