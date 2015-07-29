angular
  .module('curatorApp')
  .controller('BlogCtrl', ['$routeParams', 'Blog', BlogCtrl]);

function BlogCtrl($routeParams, Blog){

  var vm = this;

  var currBlogId = $routeParams.blog_id;

  vm.currBlog = Blog.getBlog(currBlogId);


  // grab all the users at page load


  vm.blogFeed = Blog.getBlogFeed(vm.currBlog.kimonoId, vm.currBlog.isOnDemand, vm.currBlog.onDemandVal);

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
