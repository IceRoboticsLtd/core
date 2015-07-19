/*
 * Test router
 */
module.exports = function(req, res, next) {	
	var _Test = {};
	config = require('../configs/server.js');
	var configs = config.configs,
	    server_prefix = configs.server_prefix || 'CORE';
	console.log(server_prefix + " - Test router required.");
	var express = require('express'),
		redirect = require('express-redirect'),
		bodyParser = require('body-parser');
	_Test = express.Router();
	_Test.use(function(req, res, next) {
		console.log(server_prefix + ' - Test router process');
		// process each test request
		next();
	});
	// routes starting with '/'	
	_Test.route('/')
		.all(function(req, res, next) {
			console.log(server_prefix + " - Test all");
			// process all, runs each time
			next();
		})
		.get(function(req, res, next) {
			console.log(server_prefix + " - Test get");
			// process the get (e.g. render)
			var app = 'test'; // default
			if(typeof configs.title === 'undefined'){
				var title = 'Untitled';
			}
			else {
				var title = configs.title;
			}
			if(typeof configs.description === 'undefined'){
				var description = 'undefined';
			}
			else {
				var description = configs.description;
			}
			if(typeof configs.keywords === 'undefined'){
				var keywords = 'undefined';
			}
			else {
				var keywords = configs.keywords;
			}
			if(typeof configs.author === 'undefined'){
				var author = 'undefined';
			}
			else {
				var author = configs.author;
			}
			if(typeof configs.css_file_location === 'undefined') {
				var css_file_location = 'css/style.css';
			}
			else {
				var css_file_location = configs.css_file_location;
				// replace the css file name by the app name, if provided
				if(typeof app_name === 'undefined'){
					// continue without replacement
				}
				else {
					// replace the css file location by the theme server, theme and app name
					var theme_server_themes_theme = theme_server_value + "/themes/" + theme_value + "/";
					css_file_location = theme_server_themes_theme + css_file_location;
					css_file_location = css_file_location.replace('style', app_name);
				}
			}
			if(typeof configs.access_control_allow_origin === 'undefined'){
				var access_control_allow_origin = '*';
			}
			else {
				var access_control_allow_origin = configs.access_control_allow_origin;
			}
			if(typeof configs.host === 'undefined'){
				var host = req.host;
			}
			else {
				var host = configs.host;
			}
			if(typeof configs.web_root === 'undefined'){
				var web_root = '';
			}
			else {
				var web_root = configs.web_root;
			}
		    res.render(app, { title: title, access_control_allow_origin: access_control_allow_origin, host: host, web_root: web_root, layout: false });
		})
		.put(function(req, res, next) {
			console.log(server_prefix + " - Test put");
			// process the put (e.g. update)
			next();
		})
		.post(function(req, res, next) {
			console.log(server_prefix + " - Test post");
			// process the post (e.g. insert)
			next();
		})
		.delete(function(req, res, next) {
			console.log(server_prefix + " - Test delete");
			// process the delete (e.g. delete)
			next();
		});
	return _Test;
}();// calls itself