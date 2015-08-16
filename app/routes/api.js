var bodyParser = require('body-parser');
var User       = require('../models/user');
var jwt        = require('jsonwebtoken');
var config     = require('../../config');
var request 	 = require('request');
var path 			 = require('path');
var fs				 = require('fs');

module.exports = function(app, express) {

	var secret 		 = config.secret;
	var kimonoKey  = config.kimonoKey;
	var apiKeyStr  = '?apikey=' + kimonoKey;

	var apiRouter = express.Router();

	// test route to make sure everything is working
	// accessed at GET http://localhost:8080/api
	apiRouter.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to our api!' });
	});

	/**
	 * GET route to get all blog objects
	 */
	apiRouter.route('/getblogs')

		.get(function(req, res) {

			/**
			 * TODO - The ideal way to do this is to wrap our function and pass in our
			 * 				own callbacks
			 * 				http://stackoverflow.com/questions/10058814/get-data-from-fs-readfile
			 */
			// function readContent(callback) {
			//     fs.readFile("file.json", function (err, content) {
			//         if (err) return callback(err)
			//         callback(null, content)
			//     })
			// }
			//
			// readContent(function (err, content) {
			//     console.log(content)
			// })

			fs.readFile(path.join(__dirname, '../models/blogs.json'), function (err, data) {
				if (err) {
					return console.error(err);
				}

				var rawResponse = JSON.parse(data);
				var blogs				= rawResponse.blogs;

				res.json(blogs);
			});
		});

		/**
		 * GET route to get a single blog object by id
		 * @param kimono_id: the blog's unique kimono feed id
		 */
		apiRouter.route('/getblog/:blog_id')

			.get(function(req, res) {

				var blogs;
				var blog;
				var blogId = req.params.blog_id;
				/**
				 * TODO - The ideal way to do this is to wrap our function and pass in our
				 * 				own callbacks
				 * 				http://stackoverflow.com/questions/10058814/get-data-from-fs-readfile
				 */
				// function readContent(callback) {
				//     fs.readFile("file.json", function (err, content) {
				//         if (err) return callback(err)
				//         callback(null, content)
				//     })
				// }
				//
				// readContent(function (err, content) {
				//     console.log(content)
				// })

				fs.readFile(path.join(__dirname, '../models/user.json'), function (err, data) {
					if (err) {
						return console.error(err);
					}
					blogs = JSON.parse(data);
				});

				res.json(blog);
			});

	/**
	 * GET route for a standard kimono feed
	 * @param kimono_id: the blog's unique kimono feed id
	 */
	apiRouter.route('/getfeed/:kimono_id')

		.get(function(req, res) {

			var kimonoId = req.params.kimono_id;

			/**
			 * use Request to get json from Kimono
			 * @param
			 */
 			request('https://www.kimonolabs.com/api/' + kimonoId + apiKeyStr,
				function(err, response, body) {

					if (!err && response.statusCode == 200) {

						var bodyJSON = JSON.parse(body);
						var collection = bodyJSON.results.collection1;

						res.json(collection);
			    }
				});
		});

	/**
	 * GET route for Pan on-demand Kimono feed
	 * @param kimono_id: the blog's unique kimono feed id
	 * @param od_val: (eg. popular, )
	 */
	apiRouter.route('/getondemand/:kimono_id/:od_val')

		// get all the users (accessed at GET http://localhost:8080/api/users)
		.get(function(req, res) {

			var kimonoId 		= req.params.kimono_id,
					onDemandVal = req.params.od_val;

			/**
			 * use Request to get json from Kimono
			 */
 			request('https://www.kimonolabs.com/api/json/ondemand/' + kimonoId + apiKeyStr + '&kimpath1=' + onDemandVal,
			function(err, response, body) {

				if (!err && response.statusCode == 200) {

					var bodyJSON = JSON.parse(body);
					var collection = bodyJSON.results.collection1;

					res.json(collection);
		    }
			});
		});

	return apiRouter;
};
