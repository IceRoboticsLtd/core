/*
 * Api router
 */
module.exports = function(req, res, next) {	
	var _Api = {};
	config = require('../configs/server.js');
	var configs = config.configs,
	    server_prefix = configs.server_prefix || 'CORE';
	console.log(server_prefix + " - Api router required.");
	var express = require('express'),
		redirect = require('express-redirect'),
		bodyParser = require('body-parser'),
		passport = require('passport');
	_Api = express.Router();
	_Api.use(function(req, res, next) {
		console.log(server_prefix + ' - Api router process');
		// process each login request
		next();
	});
	// routes starting with '/'
	_Api.route('/')
		.all(function(req, res, next) {
			console.log(server_prefix + " - Api all");
			// process all, runs each time
			next();
		})
		.get(function(req, res, next) {
			console.log(server_prefix + " - Api get");
			// process the get (e.g. render)
			if(req.user) {
		    	// already logged in
		    	res.render('pages/api', { title: title, description: description, keywords: keywords, author: author, message: req.session.messages, layout: false });
		    	// and then remember to clear the message
		    	req.session.messages = null;
			} else {
		    	// not logged in, show the login form, remember to pass the message
		    	// for displaying when error happens
		    	console.log(server_prefix + " - Api requested");
				var app = 'login'; // default 
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
				
		    	// res.render('pages/login', { title: title, description: description, keywords: keywords, author: author, message: req.session.messages, layout: false }); // TEMPORARILY COMMENTED OUT FOR TEST
		
				res.render('pages/api', { title: title, description: description, keywords: keywords, author: author, message: req.session.messages, layout: false }); // TEMPORARILY ADDED FOR TEST
		
		    	// and then remember to clear the message
		    	//req.session.messages = null; // TEMPORARILY COMMENTED OUT FOR TEST
			}
		})
		.put(function(req, res, next) {
			console.log(server_prefix + " - Api put");
			// process the put (e.g. update)
			next();
		})
		.post(function(req, res, next) {
			console.log(server_prefix + " - Api post");
			// process the post (e.g. insert)
			// ask passport to authenticate
			passport.authenticate('local', function(err, username, info) {
			    if (err) {
			    	console.log(server_prefix + " - Api, error: " + err);
			    	// if error happens
			    	return next(err);
			    }
			    if (!username) {
			    	// if authentication fail, get the error message that we set
			    	// from previous (info.message) step, assign it into to
			    	// req.session and redirect to the login page again to display
			    	console.log(server_prefix + " - Api, message: " + info.message);
			    	req.session.messages = req.i18n.__(info.message);
			
			
			    	// return res.redirect('/login'); // TEMPORARILY COMMENTED OUT FOR TEST
			
					
			    }
			    // if everything is OK
			    req.logIn(username, function(err) {
			    	if (err) {
			    		console.log(server_prefix + " - Api, error: " + err);
			        	req.session.messages = req.i18n.__("Error");
			        	return next(err);
			    	}
			    	// set the message
			    	console.log(server_prefix + " - Api successful, redirecting ...");
			    	req.session.messages = req.i18n.__("Api successfully.");
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
			    	return res.render('pages/api', { title: title, description: description, keywords: keywords, author: author, message: req.session.messages, layout: false });
			    });
			})(req, res, next);
		})
		.delete(function(req, res, next) {
			console.log(server_prefix + " - Api delete");
			// process the delete (e.g. delete)
			next();
		});
	return _Api;
}();// calls itself