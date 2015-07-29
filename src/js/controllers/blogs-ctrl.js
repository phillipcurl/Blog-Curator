angular
  .module('curatorApp')
  .controller('BlogsCtrl', ['Blog', BlogsCtrl]);

function BlogsCtrl(Blog){

  var vm = this;

  vm.blogsList = Blog.getBlogs();

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
