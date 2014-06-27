var express = require('express'),
	device = require('../lib/device.js'),
	redirect = require('express-redirect'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	errorHandler = require('errorhandler');

/*
 * CONFIGS - The Configurations
 */ 	
config = require('../configs/server.js');
var configs = config.configs,
	server_prefix = configs.server_prefix || 'CORE';

/*
 * SERVICES - The Services
 */
var services = require('../routes/services'); // it seems that we have to start each required file as its own var 

/*
 * SERVER - The Server used for shutdown etc
 * See: https://www.exratione.com/2011/07/running-a-nodejs-server-as-a-service-using-forever/
 */
var server = express();
// Port
if(typeof configs.server_port === 'undefined'){
	var server_port = process.env.PORT || 11080;
}
else {
	var server_port = configs.server_port;
}
server.listen(server_port);
console.log(server_prefix + " - Node Version: " + process.version);
console.log(server_prefix + " - Express server listening on port %d", server_port);
console.log(server_prefix + " - To shutdown server gracefully type: node prepareForStop.js");

server.get('/prepareForShutdown', function(req, res) {
	if(req.connection.remoteAddress == "127.0.0.1"
		|| req.socket.remoteAddress == "127.0.0.1"
		// 0.4.7 oddity in https only
		|| req.connection.socket.remoteAddress == "127.0.0.1")
	{
		managePreparationForShutdown(function() {
			// don't complete the connection until the preparation is done.
			res.statusCode = 200;
			res.end();
		});
	}
	else {
		res.statusCode = 500;
		res.end();
	}
});

var managePreparationForShutdown = function(callback) {
	// perform all the cleanup and other operations needed prior to shutdown,
	// but do not actually shutdown. Call the callback function only when
	// these operations are actually complete.
	try {
		app_server.close();
		console.log(server_prefix + " - Shutdown app successful.");
	}
	catch(ex) {
		console.log(server_prefix + " - Shutdown app failed.");
		console.log(ex);
	}
	try {
		api_server.close();
		console.log(server_prefix + " - Shutdown api successful.");
	}
	catch(ex) {
		console.log(server_prefix + " - Shutdown api failed.");
		console.log(ex);
	}
	console.log(server_prefix + " - All preparations for shutdown completed.");
	callback();
};

/*
 * APP - The Application
 */
var app = express();
// Port
if(typeof configs.app_port === 'undefined'){
	var app_port = process.env.PORT || 4000;
}
else {
	var app_port = configs.app_port;
}
// App List
if(typeof configs.app_list === 'undefined'){
	var app_list = {};
}
else {
	var app_list = configs.app_list;
}
/*
 * API - The Application Programming Interface
 */
var api = express();
// Port
if(typeof configs.api_port === 'undefined'){
	var api_port = app_port+1 || 4001;
}
else {
	var api_port = configs.api_port;
}
// Api List
if(typeof configs.api_list === 'undefined'){
	var api_list = {};
}
else {
	var api_list = configs.api_list;
}
// Action List
if(typeof configs.action_list === 'undefined'){
	var action_list = {};
}
else {
	var action_list = configs.action_list;
}
// Model List
if(typeof configs.model_list === 'undefined'){
	var model_list = {};
}
else {
	var model_list = configs.model_list;
}
// Format List
if(typeof configs.format_list === 'undefined'){
	var format_list = {};
}
else {
	var format_list = configs.format_list;
}
// API All
api.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');  // Accepts requests coming from anyone, replace '*' by configs.allowedHost to restrict it
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.set('X-Powered-By', 'Express');
  res.set('Content-Type', 'application/json; charset=utf8');
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});
// API Post
api.post('/login', function(req, res){
  console.log(req.body);
  res.send(201);
});
/*
 * APP DEVELOPMENT
 *
 * .bash_profile contains 
 * NODE_ENV=development
 *
 * or start server as follows
 * NODE_ENV=development node server.js
 *
 * on Windows use
 * set NODE_ENV=development
 * check with
 * echo %NODE_ENV% 
 */
if('development' == app.settings.env){

	console.log(server_prefix + " - Using development configurations");

	app.set('view engine', 'ejs');
	app.set('view options', { layout: true });
	app.set('views', __dirname + '/../public');

	/*
	 * bodyParser() is the composition of three middlewares:
	 * - json: parses application/json request bodies
	 * - urlencoded: parses x-ww.form-urlencoded request bodies
	 * - multipart: parses multipart/form-data request bodies
	 */
    app.use(bodyParser()); // pull information from html in POST

    app.use(methodOverride());
    app.use(cookieParser());
    app.use(device.capture());
    
    app.enableDeviceHelpers();
    app.enableViewRouting();

    app.use('/resources', express.static(__dirname + '/../public/resources'));
    app.use('/app', express.static(__dirname + '/../public/app'));
    app.use(express.static(__dirname + '/../public')); // Fall back to this as a last resort

    app.use(errorHandler({ dumpExceptions: true, showStack: true })); // specific for development    
};
/*
 * APP PRODUCTION
 *
 * .bash_profile contains 
 * NODE_ENV=production
 *
 * or start server as follows
 * NODE_ENV=production node server.js
 *
 * on Windows use
 * set NODE_ENV=production
 * check with
 * echo %NODE_ENV% 
 */
if('production' == app.settings.env){

	console.log(server_prefix + " - Using production configurations");

	app.set('view engine', 'ejs');
	app.set('view options', { layout: true });
	app.set('views', __dirname + '/../public');	

	/*
	 * bodyParser() is the composition of three middlewares:
	 * - json: parses application/json request bodies
	 * - urlencoded: parses x-ww.form-urlencoded request bodies
	 * - multipart: parses multipart/form-data request bodies
	 */
    app.use(bodyParser()); // pull information from html in POST

    app.use(methodOverride());
    app.use(cookieParser());
    app.use(device.capture());
    
    app.enableDeviceHelpers();
    app.enableViewRouting();

    app.use('/resources', express.static(__dirname + '/../public/resources'));
    app.use('/app', express.static(__dirname + '/../public/app'));
    app.use(express.static(__dirname + '/../public')); // Fall back to this as a last resort

    app.use(errorHandler({ dumpExceptions: false, showStack: false })); // specific for production    
};



if(typeof configs.title === 'undefined'){
	var title = 'Untitled';
}
else {
	var title = configs.title;
}

if(typeof configs.web_root === 'undefined'){
	var web_root = '';
}
else {
	var web_root = configs.web_root;
}

if(typeof configs.host === 'undefined'){
	var host = req.host;
}
else {
	var host = configs.host;
}

// routing to pages
app.get('/', function(req, res) {

	// TO DO: Find requested app (e.g. /?app='calculator') from app list, then supply page with app config

    res.render('page', { title: title, host: host, web_root: web_root, layout: false });
});

var app_server = app.listen(app_port, function() {
	console.log(server_prefix + " - Express app server listening on port %d in %s mode", app_port, app.settings.env);
});

var api_server = api.listen(api_port, function() {
	console.log(server_prefix + " - Express api server listening on port %d in %s mode", api_port, api.settings.env);
});
