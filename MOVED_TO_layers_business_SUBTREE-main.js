/*
 * main.js
 *
 * Usage: call as follows whilst making sure to use the escaped quotes and avoid spaces e.g. 
 *
 * node main.js {\"uuid\":\"6e8bc430-9c3a-11d9-9669-0800200c9a66\"}
 *
 * Following the example from https://github.com/neumino/thinky/examples/basic-todo
 * but with our own modifications (removal of 'thinky' and 'rethinkdbdash')
 */

/*
 * See also http://alexperry.io/node/2015/03/25/promises-in-node.html
 */
console.log('core main - called');

// Required modules
var _proxies = require('../proxies/proxies');
// ONLY ENDPOINTS OF _proxies ARE Promises, e.g. _proxies().proxy().libraries().library().path()
// WE POSTPONE TO USE A Promise DOWN THE OBJECT HIERARCHY AS FAR DOWN AS FEASIBLE
// UNTIL WE NEED THE Promise RESOLVED
console.log('core main - _proxies: ', _proxies);                                                                                              // function () { return new Proxies(); }
// console.log('server - _proxies(): ', _proxies());                                                                                                // Proxies {}
// console.log('server - _proxies().proxy: ', _proxies().proxy);                                                                                    // function () { return new ProxiesProxy(); }
// console.log('server - _proxies().proxy(): ', _proxies().proxy());                                                                                // Proxy {}
// console.log('server - _proxies().proxy().libraries: ', _proxies().proxy().libraries);                                                            // function () { return new ProxyLibraries(); }
// console.log('server - _proxies().proxy().libraries(): ', _proxies().proxy().libraries());                                                        // Libraries {}
// console.log('server - _proxies().proxy().libraries().library: ', _proxies().proxy().libraries().library);                                        // function () { return new LibrariesLibrary(); } 
// console.log('server - _proxies().proxy().libraries().library(): ', _proxies().proxy().libraries().library());                                    // Library {}
// console.log('server - _proxies().proxy().libraries().library().path: ', _proxies().proxy().libraries().library().path);                      // function () { return new LibraryPath(); }
// console.log('server - _proxies().proxy().libraries().library().path(): ', _proxies().proxy().libraries().library().path());                      // LibraryPath { _default: Object, _validator: undefined, _options: {} } 
// console.log('server - _proxies().proxy().libraries().library().promise(): ', _proxies().proxy().libraries().library().promise());
var promise = _proxies().proxy().libraries().library().promise();
var join = promise.join;

// Start of the chain
join(_proxies(), function(proxies) {
  console.log('core main - proxies: ', proxies); // Works: Proxies {}
  return(proxies);
}) //eof join proxies
.then(function(proxies) {
  var resourceForUuid = {};
  var uuid = {};
  // process.argv is an array containing the command line arguments. 
  // The first element will be 'node', the second element will be the name of the JavaScript file. 
  // The next elements will be any additional command line arguments.
  process.argv.forEach(function (val, index, array) {
    // index 0 will be path to and node executable
	// index 1 will be path to and this file
	// index 2 will be optional additional command line arguments, e.g. a JSON file {uuid:1234}
	// console.log(index + ': ' + val);
	// catch the val at index 2
    switch(index) {
      case 0: // node
        break; // eof case 0
      case 1: // this file
        break; // eof case 1
      case 2: // optional additional command line argument
        console.log('core main - additional command: ', val);
        try {
          var o = JSON.parse(val);
		  // Handle non-exception-throwing cases:
		  // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
		  // but... JSON.parse(null) returns 'null', and typeof null === "object", 
		  // so we must check for that, too.
	      if (o && typeof o === "object" && o !== null) {
			// return o;
			// now we have the object o
            console.log('core main - object: ', o);
            uuid = o.uuid;
            console.log('core main - uuid: ', uuid);
			// Get a resource, by comparing with the uuid
//            console.log('server - resource: ', _proxies().proxy().resources().resource); // function () { return new ResourcesResource(); }
//            console.log('server - _proxies().proxy().resources().resource(): ', _proxies().proxy().resources().resource());  // Resource {}
//            console.log('server - _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66: ', _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66);
//            console.log('server - _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66(): ', _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66());
            var resource = _proxies().proxy().resources().resource();
            console.log('core main - resource: ', resource);
            for (var key in resource) {
            	console.log('core main - key: ', key);
            	// strip prefix _ if present on key, then substitute all _ for - if present on key
                var keyUuid = key.replace(/^\_/, "").replace(/_/g, "\-");
                console.log('core main - keyUuid: ', keyUuid);
                if(uuid == keyUuid) {
                  console.log('core main - uuid == keyUuid');
                  // do something
                  resourceForUuid = resource[key]();
                  break;
                }
			}
            console.log('core main - resourceForUuid: ', resourceForUuid);
          } // eof if
        } // eof try
        catch (e) { 
          console.log('core main - error: ', e);
        } // eof catch
        break; // eof case 2
      default:
        // do nothing
      break;
    } // eof switch
  }); // forEach
  // Validate resourceForUuid
  if(Object.keys(resourceForUuid).length == 0) {
  	// raise an error, the resourceForUuid has not been found
  	throw new Error("No resource found for uuid: ", uuid); // TO FIX: for some reason the value of uuid is empty here
  } 
  else {
  	return resourceForUuid;
  };
}) //eof then proxies
.then(function(resourceForUuid) {
  console.log('core main - resourceForUuid: ', resourceForUuid); // Works: e.g. _6e8bc430_9c3a_11d9_9669_0800200c9a66 { URI: 'urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66' }

  var main = _proxies().proxy().mains().main();
  console.log('core main - main: ', main);
  main.setproxies(_proxies);

  console.log('core main - main.proxies(): ', main.proxies());

  main.setresource(resourceForUuid); 

  console.log('core main - main.resource(): ', main.resource());
  
  // Start of the run chain
  join(main.run(), function(run) {
    console.log('core main - run: ', run);
    return(run);
  }); // eof join main.run()
  
}) // eof then resourceForUuid
.catch(function(error) {
  console.log('core main - error: ', error);
}) // eof catch
.finally(function() {
  console.log('core main - finally');
}); // eof finally
