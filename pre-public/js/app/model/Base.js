/*
 * ModelBase
 */
define(function () {
    console.log('CORE: modelBase called');
    function modelBase(id, attributes, options) { // Extended with attributes and options for Backbone adopted functionality
        this.id = id;
        this.keyValuePairs = {};    
        // Adopted from Backbone
        // Backbone.Model
        // --------------
        // Backbone **Models** are the basic data object in the framework --
        // frequently representing a row in a table in a database on your server.
        // A discrete chunk of data and a bunch of useful, related methods for
        // performing computations and transformations on that data.
        // Create a new model with the specified attributes. A client id (`cid`)
        // is automatically generated and assigned for you.  
        var attrs = attributes || {};
        options || (options = {});
        this.cid = _.uniqueId('c');
        this.attributes = {};      
        if(options.collection) this.collection = options.collection;
        if(options.parse) attrs = this.parse(attrs, options) || {};        
        attrs = _.defaults({}, attrs, _.result(this, 'defaults'));       
        this.set(attrs, options);
        this.changed = {};
        this.initialize.apply(this, arguments);
		
		// Backbone's extend function is now within CORE.main
		
        // Allow the `Backbone` object to serve as a global event bus, for folks who
        // want global "pubsub" in a convenient place.
    //    _.extend(Backbone, Events);  // We probably don't want this dependency on Backbone
    };
    modelBase.prototype = {
        getValue: function (key) {
            console.log('CORE: modelBase getValue(key) called');
            console.log('key = ' + key);
            var searchKey = key;
            var keyFound = false;
            var value;
            for(key in this.keyValuePairs) {
                if(key == searchKey){
                    keyFound = true;
                    value = this.keyValuePairs[key];
                }
            }
            if(keyFound) {
                console.log('key found');
            }
            else {
                console.log('key not found');
            }
            console.log('value = ' + value);
            return value;
        },
        setValue: function (key, value) {
            console.log('CORE: modelBase setValue(key, value) called'); 
            // To Do: search for key in keyValuePairs and updated its value           
            // value = value;
        },
        getKeyValuePairs: function () {
            console.log('CORE: modelBase getKeyValuePairs() called');             
            return this.keyValuePairs;
        },
        setKeyValuePairs: function (keyValuePairs) {
            console.log('CORE: modelBase setKeyValuePairs(keyValuePairs) called');         
            this.keyValuePairs = keyValuePairs;
        },  
        setModelService: function (modelService) {
            console.log('CORE: modelBase setModelService(modelService) called');          
            this.modelService = modelService;
        },
        getModel: function(key) {
            console.log('CORE: modelBase getModel() called');
            try {
                this.model = this.getModel(key);
                console.log('CORE: modelBase this.model:');
                console.log(this.model);
                return this.model;
            }
            catch(e) {
                console.log('CORE: modelBase getModel(key) error:');
                console.log(e);
                return;
            }
        },
        renderModel: function () {
            console.log('CORE: modelBase renderModel() called');
            try {
                var scriptTag = document.createElement('script');
                scriptTag.type = "text/javascript";
                scriptTag.src = this.getValue('scriptSource');
                document.getElementsByTagName('head')[0].appendChild(scriptTag);
            }
            catch(e) {
                console.log('CORE: modelBase renderModel() error:');
                console.log(e);
            }
        },
        // Adopted from Backbone
        //
        // Backbone.Events
        // ---------------
        // A module that can be mixed in to *any object* in order to provide it with
        // custom events. You may bind with `on` or remove with `off` callback
        // functions to an event; `trigger`-ing an event fires all callbacks in
        // succession.
        //
        //     var object = {};
        //     _.extend(object, Backbone.Events);
        //     object.on('expand', function(){ alert('expanded'); });
        //     object.trigger('expand');
        //
        // ORIGINAL var Events = Backbone.Events = { // Made it dependent on Backbone
        Events: {
            // Implement fancy features of the Events API such as multiple event
            // names `"change blur"` and jQuery-style event maps `{change: action}`
            // in terms of the existing API.
            _eventsApi: function(obj, action, name, rest) {
                console.log("CORE: modelBase _eventsApi(obj, action, name, rest) called");
                // Regular expression used to split event strings.
                var eventSplitter = /\s+/;    
                if (!name) return true;
                // Handle event maps.
                if (typeof name === 'object') {
                    for (var key in name) {
                        obj[action].apply(obj, [key, name[key]].concat(rest));
                    }
                    return false;
                }
                // Handle space separated event names.
                if (eventSplitter.test(name)) {
                    var names = name.split(eventSplitter);
                    for (var i = 0, length = names.length; i < length; i++) {
                        obj[action].apply(obj, [names[i]].concat(rest));
                    }
                    return false;
                }
                return true;
            },
            // Deprecated method 'bind' now called 'on', implemented here for backwards compatibility.
            bind: function(name, callback, context) {
                console.log("CORE: modelBase Events bind(name, callback, context) called");
                return this.on(name, callback, context);
            },
            // Deprecated method 'unbind' now called 'off', implemented here for backwards compatibility.
            unbind: function(name, callback, context) {
                console.log("CORE: modelBase Events unbind(name, callback, context) called");
                return this.off(name, callback, context);
            },            
            // Bind an event to a `callback` function. Passing `"all"` will bind
            // the callback to all events fired.
            on: function(name, callback, context) {
                console.log("CORE: modelBase Events on(name, callback, context) called");
                if (!this._eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
                this._events || (this._events = {});
                var events = this._events[name] || (this._events[name] = []);
                events.push({callback: callback, context: context, ctx: context || this});
                return this;
            },
            // Bind an event to only be triggered a single time. After the first time
            // the callback is invoked, it will be removed.
            once: function(name, callback, context) {
                console.log("CORE: modelBase Events once(name, callback, context) called");
                if (!this._eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
                var self = this;
                var once = _.once(function() {
                    self.off(name, once);
                    callback.apply(this, arguments);
                });
                once._callback = callback;
                return this.on(name, once, context);
            },
            // Remove one or many callbacks. If `context` is null, removes all
            // callbacks with that function. If `callback` is null, removes all
            // callbacks for the event. If `name` is null, removes all bound
            // callbacks for all events.
            off: function(name, callback, context) {
                console.log("CORE: modelBase Events off(name, callback, context) called");
                if (!this._events || !this._eventsApi(this, 'off', name, [callback, context])) return this;
                // Remove all callbacks for all events.
                if (!name && !callback && !context) {
                    this._events = void 0;
                    return this;
                }
                var names = name ? [name] : _.keys(this._events);
                for (var i = 0, length = names.length; i < length; i++) {
                    name = names[i];
                    // Bail out if there are no events stored.
                    var events = this._events[name];
                    if (!events) continue;
                    // Remove all callbacks for this event.
                    if (!callback && !context) {
                        delete this._events[name];
                        continue;
                    }
                    // Find any remaining events.
                    var remaining = [];
                    for (var j = 0, k = events.length; j < k; j++) {
                        var event = events[j];
                        if (
                            callback && callback !== event.callback &&
                            callback !== event.callback._callback ||
                            context && context !== event.context
                        ) {
                            remaining.push(event);
                        }
                    }
                    // Replace events if there are any remaining.  Otherwise, clean up.
                    if (remaining.length) {
                        this._events[name] = remaining;
                    } else {
                        delete this._events[name];
                    }
                }
                return this;
            },
            // A difficult-to-believe, but optimized internal dispatch function for
            // triggering events. Tries to keep the usual cases speedy (most internal
            // Backbone events have 3 arguments).
            _triggerEvents: function(events, args) {
                console.log("CORE: modelBase _triggerEvents(events, args) called");
                var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
                switch (args.length) {
                    case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
                    case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
                    case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
                    case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
                    default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
                }
            },
            // Trigger one or many events, firing all bound callbacks. Callbacks are
            // passed the same arguments as `trigger` is, apart from the event name
            // (unless you're listening on `"all"`, which will cause your callback to
            // receive the true name of the event as the first argument).
            trigger: function(name) {
                console.log("CORE: modelBase Events trigger(name) called");
                if (!this._events) return this;
                var args = slice.call(arguments, 1);
                if (!this._eventsApi(this, 'trigger', name, args)) return this;
                var events = this._events[name];
                var allEvents = this._events.all;
                if (events) this._triggerEvents(events, args);
                if (allEvents) this._triggerEvents(allEvents, arguments);
                return this;
            },
            // Inversion-of-control versions of `on` and `once`. Tell *this* object to
            // listen to an event in another object ... keeping track of what it's
            // listening to.
            listenTo: function(obj, name, callback) {
                console.log("CORE: modelBase Events listenTo(obj, name, callback) called");
                var listeningTo = this._listeningTo || (this._listeningTo = {});
                var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
                listeningTo[id] = obj;
                if (!callback && typeof name === 'object') callback = this;
                obj.on(name, callback, this);
                return this;
            },
            listenToOnce: function(obj, name, callback) {
                console.log("CORE: modelBase Events listenToOnce(obj, name, callback) called");
                if (typeof name === 'object') {
                    for (var event in name) this.listenToOnce(obj, event, name[event]);
                    return this;
                }
                var cb = _.once(function() {
                    this.stopListening(obj, name, cb);
                    callback.apply(this, arguments);
                });
                cb._callback = callback;
                return this.listenTo(obj, name, cb);
            },
            // Tell this object to stop listening to either specific events ... or
            // to every object it's currently listening to.
            stopListening: function(obj, name, callback) {
                console.log("CORE: modelBase Events stopListening(obj, name, callback) called");
                var listeningTo = this._listeningTo;
                if (!listeningTo) return this;
                var remove = !name && !callback;
                if (!callback && typeof name === 'object') callback = this;
                if (obj) (listeningTo = {})[obj._listenId] = obj;
                for (var id in listeningTo) {
                    obj = listeningTo[id];
                    obj.off(name, callback, this);
                    if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
                }
                return this;
            }
        }, // eof Events
        // Adopted from Backbone Model
        // Model methods
        changed: null,
        validationError: null,
        idAttribute: 'id',
        // The default model for a collection is just a **Backbone.Model**.
        // This should be overridden in most cases.
        // ORIGINAL model: Model,
        model: modelBase, // Replaced Model by modelBase
        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
            console.log("CORE: modelBase initialize() called");
            // This can be overwritten for a specific object
        },
        // The JSON representation of a Collection is an array of the
        // models' attributes.
        toJSON: function(options) {
            console.log("CORE: modelBase toJSON(options) called");
            return _.clone(this.attributes);
        },
        // Proxy `Backbone.sync` by default.
        sync: function() {
            console.log("CORE: modelBase sync() called");         
            return Backbone.sync.apply(this, arguments); // TO DO: make independent of Backbone, use e.g. CORE.sync.apply(this, arguments) instead
        },
        // Get the value of an attribute.
        get: function(attr) {
            console.log("CORE: modelBase get(attr) called"); 
            return this.attributes[attr];
        },
        // Get the HTML-escaped value of an attribute.
        escape: function(attr) {
            console.log("CORE: modelBase escape(attr) called"); 
            return _.escape(this.get(attr));
        },
        // Returns `true` if the attribute contains a value that is not null
        // or undefined.
        has: function(attr) {
            console.log("CORE: modelBase has(attr) called"); 
            return this.get(attr) != null;
        },
        // Special-cased proxy to underscore's `_.matches` method.
        matches: function(attrs) {
            console.log("CORE: modelBase matches(attrs) called"); 
            return _.matches(attrs)(this.attributes);
        },
        // Set a hash of model attributes on the object, firing `"change"`. This is
        // the core primitive operation of a model, updating the data and notifying
        // anyone who needs to know about the change in state. The heart of the beast.
        set: function(key, val, options) {
            console.log("CORE: modelBase set(key, val, options) called"); 
            var attr, attrs, unset, changes, silent, changing, prev, current;
            if (key == null) return this;
            // Handle both `"key", value` and `{key: value}` -style arguments.
            if (typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }
            options || (options = {});
            // Run validation.
            if (!this._validate(attrs, options)) return false;
            // Extract attributes and options.
            unset           = options.unset;
            silent          = options.silent;
            changes         = [];
            changing        = this._changing;
            this._changing  = true;
            if (!changing) {
                this._previousAttributes = _.clone(this.attributes);
                this.changed = {};
            }
            current = this.attributes, prev = this._previousAttributes;
            // Check for changes of `id`.
            if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];
            // For each `set` attribute, update or delete the current value.
            for (attr in attrs) {
                val = attrs[attr];
                if (!_.isEqual(current[attr], val)) changes.push(attr);
                if (!_.isEqual(prev[attr], val)) {
                    this.changed[attr] = val;
                } else {
                    delete this.changed[attr];
                }
                unset ? delete current[attr] : current[attr] = val;
            }
            // Trigger all relevant attribute changes.
            if (!silent) {
                if (changes.length) this._pending = options;
                for (var i = 0, length = changes.length; i < length; i++) {
                    this.trigger('change:' + changes[i], this, current[changes[i]], options);
                }
            }
            // You might be wondering why there's a `while` loop here. Changes can
            // be recursively nested within `"change"` events.
            if (changing) return this;
            if (!silent) {
                while (this._pending) {
                    options = this._pending;
                    this._pending = false;
                    this.trigger('change', this, options);
                }
            }
            this._pending = false;
            this._changing = false;
            return this;
        },
        // Remove an attribute from the model, firing `"change"`. `unset` is a noop
        // if the attribute doesn't exist.
        unset: function(attr, options) {
            console.log("CORE: modelBase unset(attr, options) called"); 
            return this.set(attr, void 0, _.extend({}, options, {unset: true}));
        },
        // Clear all attributes on the model, firing `"change"`.
        clear: function(options) {
            console.log("CORE: modelBase clear(options) called"); 
            var attrs = {};
            for (var key in this.attributes) attrs[key] = void 0;
            return this.set(attrs, _.extend({}, options, {unset: true}));
        },
        // Determine if the model has changed since the last `"change"` event.
        // If you specify an attribute name, determine if that attribute has changed.
        hasChanged: function(attr) {
            console.log("CORE: modelBase hasChanged(attr) called"); 
            if (attr == null) return !_.isEmpty(this.changed);
            return _.has(this.changed, attr);
        },
        // Return an object containing all the attributes that have changed, or
        // false if there are no changed attributes. Useful for determining what
        // parts of a view need to be updated and/or what attributes need to be
        // persisted to the server. Unset attributes will be set to undefined.
        // You can also pass an attributes object to diff against the model,
        // determining if there *would be* a change.
        changedAttributes: function(diff) {
            console.log("CORE: modelBase changedAttributes(diff) called"); 
            if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
            var val, changed = false;
            var old = this._changing ? this._previousAttributes : this.attributes;
            for (var attr in diff) {
                if (_.isEqual(old[attr], (val = diff[attr]))) continue;
                (changed || (changed = {}))[attr] = val;
            }
            return changed;
        },
        // Get the previous value of an attribute, recorded at the time the last
        // `"change"` event was fired.
        previous: function(attr) {
            console.log("CORE: modelBase previous(attr) called"); 
            if (attr == null || !this._previousAttributes) return null;
            return this._previousAttributes[attr];
        },
        // Get all of the attributes of the model at the time of the previous
        // `"change"` event.
        previousAttributes: function() {
            console.log("CORE: modelBase previousAttributes() called"); 
            return _.clone(this._previousAttributes);
        },
        // Wrap an optional error callback with a fallback error event.
        wrapError: function(model, options) {
            console.log('CORE: mainBase wrapError(model, options) called'); 
            var error = options.error;
            options.error = function(resp) {
              if (error) error(model, resp, options);
              model.trigger('error', model, resp, options);
            };
        },
        // Fetch the model from the server. If the server's representation of the
        // model differs from its current attributes, they will be overridden,
        // triggering a `"change"` event.
        fetch: function(options) {
            console.log("CORE: modelBase fetch(options) called"); 
            options = options ? _.clone(options) : {};
            if (options.parse === void 0) options.parse = true;
            var model = this;
            var success = options.success;
            options.success = function(resp) {
                if (!model.set(model.parse(resp, options), options)) return false;
                if (success) success(model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            this.wrapError(this, options);
            return this.sync('read', this, options);
        },
        // Set a hash of model attributes, and sync the model to the server.
        // If the server returns an attributes hash that differs, the model's
        // state will be `set` again.
        save: function(key, val, options) {
            console.log("CORE: modelBase save(key, val, options) called"); 
            var attrs, method, xhr, attributes = this.attributes;
            // Handle both `"key", value` and `{key: value}` -style arguments.
            if (key == null || typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }
            options = _.extend({validate: true}, options);
            // If we're not waiting and attributes exist, save acts as
            // `set(attr).save(null, opts)` with validation. Otherwise, check if
            // the model will be valid when the attributes, if any, are set.
            if (attrs && !options.wait) {
                if (!this.set(attrs, options)) return false;
            } else {
                if (!this._validate(attrs, options)) return false;
            }
            // Set temporary attributes if `{wait: true}`.
            if (attrs && options.wait) {
                this.attributes = _.extend({}, attributes, attrs);
            }
            // After a successful server-side save, the client is (optionally)
            // updated with the server-side state.
            if (options.parse === void 0) options.parse = true;
            var model = this;
            var success = options.success;
            options.success = function(resp) {
                // Ensure attributes are restored during synchronous saves.
                model.attributes = attributes;
                var serverAttrs = model.parse(resp, options);
                if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
                if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
                    return false;
                }
                if (success) success(model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            this.wrapError(this, options);
            method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
            if (method === 'patch' && !options.attrs) options.attrs = attrs;
            xhr = this.sync(method, this, options);
            // Restore attributes.
            if (attrs && options.wait) this.attributes = attributes;
            return xhr;
        },
        // Destroy this model on the server if it was already persisted.
        // Optimistically removes the model from its collection, if it has one.
        // If `wait: true` is passed, waits for the server to respond before removal.
        destroy: function(options) {
            console.log("CORE: modelBase destroy(options) called"); 
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;
            var destroy = function() {
                model.stopListening();
                model.trigger('destroy', model, model.collection, options);
            };
            options.success = function(resp) {
                if (options.wait || model.isNew()) destroy();
                if (success) success(model, resp, options);
                if (!model.isNew()) model.trigger('sync', model, resp, options);
            };
            if (this.isNew()) {
                options.success();
                return false;
            }
            this.wrapError(this, options);
            var xhr = this.sync('delete', this, options);
            if (!options.wait) destroy();
            return xhr;
        },
        // Default URL for the model's representation on the server -- if you're
        // using Backbone's restful methods, override this to change the endpoint
        // that will be called.
        url: function() {
            console.log("CORE: modelBase url() called"); 
            var base =
                _.result(this, 'urlRoot') ||
                _.result(this.collection, 'url') ||
                urlError();
            if (this.isNew()) return base;
            return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
        },
        // **parse** converts a response into the hash of attributes to be `set` on
        // the model. The default implementation is just to pass the response along.
        parse: function(resp, options) {
            console.log("CORE: modelBase parse(resp, options) called"); 
            return resp;
        },
        // Create a new model with identical attributes to this one.
        clone: function() {
            console.log("CORE: modelBase clone() called"); 
            return new this.constructor(this.attributes);
        },
        // A model is new if it has never been saved to the server, and lacks an id.
        isNew: function() {
            console.log("CORE: modelBase isNew() called"); 
            return !this.has(this.idAttribute);
        },
        // Check if the model is currently in a valid state.
        isValid: function(options) {
            console.log("CORE: modelBase isValid(options) called"); 
            return this._validate({}, _.extend(options || {}, { validate: true }));
        },
        // Run validation against the next complete set of model attributes,
        // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
        _validate: function(attrs, options) {
            console.log("CORE: modelBase _validate(attrs, options) called"); 
            if (!options.validate || !this.validate) return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validationError = this.validate(attrs, options) || null;
            if (!error) return true;
            this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
            return false;
        },// eof Model methods
        // Backbone.Collection
        // -------------------
        // If models tend to represent a single row of data, a Backbone Collection is
        // more analogous to a table full of data ... or a small slice or page of that
        // table, or a collection of rows that belong together for a particular reason
        // -- all of the messages in this particular folder, all of the documents
        // belonging to this particular author, and so on. Collections maintain
        // indexes of their models, both in order, and for lookup by `id`.
        // Create a new **Collection**, perhaps to contain a specific type of `model`.
        // If a `comparator` is specified, the Collection will maintain
        // its models in sort order, as they're added and removed.
        // ORIGINAL var Collection = Backbone.Collection = function(models, options) { // Made a dependency on Backbone, which we don't want
        Collection: function(models, options) {
            console.log("CORE: modelBase Collection(models, options) called"); 
            options || (options = {});
            if (options.model) this.model = options.model;
            if (options.comparator !== void 0) this.comparator = options.comparator;
            this._reset();
            this.initialize.apply(this, arguments);
            if (models) this.reset(models, _.extend({silent: true}, options));
        } // eof Collection
    };
    // Adopted from Backbone
    // Underscore methods that we want to implement on the Model.
    var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit', 'chain', 'isEmpty'];
    // Mix in each Underscore method as a proxy to `modelBase#attributes`.
    _.each(modelMethods, function(method) {
        if (!_[method]) return;
        modelBase.prototype[method] = function() {
            var args = slice.call(arguments);
            args.unshift(this.attributes);
            return _[method].apply(_, args);
        };
    });    
    // Adopted from Backbone
    // Helpers
    // -------
    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.    
    modelBase.prototype.Collection.extend = function(protoProps, staticProps) {
        console.log('CORE: modelBase Collection extend(protoProps, staticProps) called');
        var parent = this;
        var child;
        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if (protoProps && _.has(protoProps, 'constructor')) {
            child = protoProps.constructor;
        } else {
            child = function(){ return parent.apply(this, arguments); };
        }
        // Add static properties to the constructor function, if supplied.
        _.extend(child, parent, staticProps);
        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        var Surrogate = function(){ this.constructor = child; };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;
        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) _.extend(child.prototype, protoProps);
        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;
        return child;
    };
    // Default options for `Collection#set`.
    var setOptions = {add: true, remove: true, merge: true};
    var addOptions = {add: true, remove: false};
    modelBase.prototype.Collection.prototype = {
        // The default model for a collection is just a **Backbone.Model**.
        // This should be overridden in most cases.
        model: modelBase,
        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){
            console.log("CORE: modelBase Collection initialize() called");
        },
        // The JSON representation of a Collection is an array of the
        // models' attributes.
        toJSON: function(options) {
            console.log("CORE: modelBase Collection toJSON(options) called");
            return this.map(function(model){ return model.toJSON(options); });
        },
        // Proxy `Backbone.sync` by default.
        sync: function() {
            console.log("CORE: modelBase Collection sync() called");
            return Backbone.sync.apply(this, arguments); // TO DO: make independent of Backbone, use e.g. CORE.sync.apply(this, arguments) instead
        },
        // Add a model, or list of models to the set.
        add: function(models, options) {
            console.log("CORE: modelBase Collection add(models, options) called");
            return this.set(models, _.extend({merge: false}, options, addOptions));
        },
        // Remove a model, or a list of models from the set.
        remove: function(models, options) {
            console.log("CORE: modelBase Collection remove(models, options) called");
            var singular = !_.isArray(models);
            models = singular ? [models] : _.clone(models);
            options || (options = {});
            for (var i = 0, length = models.length; i < length; i++) {
                var model = models[i] = this.get(models[i]);
                if (!model) continue;
                var id = this.modelId(model.attributes);
                if (id != null) delete this._byId[id];
                delete this._byId[model.cid];
                var index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;
                if (!options.silent) {
                    options.index = index;
                    model.trigger('remove', model, this, options);
                }
                this._removeReference(model, options);
            }
            return singular ? models[0] : models;
        },
        // Update a collection by `set`-ing a new list of models, adding new ones,
        // removing models that are no longer present, and merging models that
        // already exist in the collection, as necessary. Similar to **Model#set**,
        // the core operation for updating the data contained by the collection.
        set: function(models, options) {
            console.log("CORE: modelBase Collection set(models, options) called");
            options = _.defaults({}, options, setOptions);
            if (options.parse) models = this.parse(models, options);
            var singular = !_.isArray(models);
            models = singular ? (models ? [models] : []) : models.slice();
            var id, model, attrs, existing, sort;
            var at = options.at;
            if (at < 0) at += this.length + 1;
            var sortable = this.comparator && (at == null) && options.sort !== false;
            var sortAttr = _.isString(this.comparator) ? this.comparator : null;
            var toAdd = [], toRemove = [], modelMap = {};
            var add = options.add, merge = options.merge, remove = options.remove;
            var order = !sortable && add && remove ? [] : false;
            var orderChanged = false;
            // Turn bare objects into model references, and prevent invalid models
            // from being added.
            for (var i = 0, length = models.length; i < length; i++) {
                attrs = models[i];
                // If a duplicate is found, prevent it from being added and
                // optionally merge it into the existing model.
                if (existing = this.get(attrs)) {
                    if (remove) modelMap[existing.cid] = true;
                    if (merge && attrs !== existing) {
                        attrs = this._isModel(attrs) ? attrs.attributes : attrs;
                        if (options.parse) attrs = existing.parse(attrs, options);
                        existing.set(attrs, options);
                        if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
                    }
                    models[i] = existing;
                // If this is a new, valid model, push it to the `toAdd` list.
                } else if (add) {
                    model = models[i] = this._prepareModel(attrs, options);
                    if (!model) continue;
                    toAdd.push(model);
                    this._addReference(model, options);
                }
                // Do not add multiple models with the same `id`.
                model = existing || model;
                if (!model) continue;
                id = this.modelId(model.attributes);
                if (order && (model.isNew() || !modelMap[id])) {
                    order.push(model);
                    // Check to see if this is actually a new model at this index.
                    orderChanged = orderChanged || !this.models[i] || model.cid !== this.models[i].cid;
                }
                modelMap[id] = true;
            }
            // Remove nonexistent models if appropriate.
            if (remove) {
                for (var i = 0, length = this.length; i < length; i++) {
                    if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
                }
                if (toRemove.length) this.remove(toRemove, options);
            }
            // See if sorting is needed, update `length` and splice in new models.
            if (toAdd.length || orderChanged) {
                if (sortable) sort = true;
                this.length += toAdd.length;
                if (at != null) {
                    for (var i = 0, length = toAdd.length; i < length; i++) {
                        this.models.splice(at + i, 0, toAdd[i]);
                    }
                } else {
                    if (order) this.models.length = 0;
                    var orderedModels = order || toAdd;
                    for (var i = 0, length = orderedModels.length; i < length; i++) {
                        this.models.push(orderedModels[i]);
                    }
                }
            }
            // Silently sort the collection if appropriate.
            if (sort) this.sort({silent: true});
            // Unless silenced, it's time to fire all appropriate add/sort events.
            if (!options.silent) {
                var addOpts = at != null ? _.clone(options) : options;
                for (var i = 0, length = toAdd.length; i < length; i++) {
                    if (at != null) addOpts.index = at + i;
                    (model = toAdd[i]).trigger('add', model, this, addOpts);
                }
                if (sort || orderChanged) this.trigger('sort', this, options);
            }
            // Return the added (or merged) model (or models).
            return singular ? models[0] : models;
        },
        // When you have more items than you want to add or remove individually,
        // you can reset the entire set with a new list of models, without firing
        // any granular `add` or `remove` events. Fires `reset` when finished.
        // Useful for bulk operations and optimizations.
        reset: function(models, options) {
            console.log("CORE: modelBase Collection reset(models, options) called");
            options = options ? _.clone(options) : {};
            for (var i = 0, length = this.models.length; i < length; i++) {
                this._removeReference(this.models[i], options);
            }
            options.previousModels = this.models;
            this._reset();
            models = this.add(models, _.extend({silent: true}, options));
            if (!options.silent) this.trigger('reset', this, options);
            return models;
        },
        // Add a model to the end of the collection.
        push: function(model, options) {
            console.log("CORE: modelBase Collection push(model, options) called");
            return this.add(model, _.extend({at: this.length}, options));
        },
        // Remove a model from the end of the collection.
        pop: function(options) {
            console.log("CORE: modelBase Collection pop(options) called");
            var model = this.at(this.length - 1);
            this.remove(model, options);
            return model;
        },
        // Add a model to the beginning of the collection.
        unshift: function(model, options) {
            console.log("CORE: modelBase Collection unshift(model, options) called");
            return this.add(model, _.extend({at: 0}, options));
        },
        // Remove a model from the beginning of the collection.
        shift: function(options) {
            console.log("CORE: modelBase Collection shift(options) called");
            var model = this.at(0);
            this.remove(model, options);
            return model;
        },
        // Slice out a sub-array of models from the collection.
        slice: function() {
            console.log("CORE: modelBase Collection slice() called");
            return slice.apply(this.models, arguments);
        },
        // Get a model from the set by id.
        get: function(obj) {
            console.log("CORE: modelBase Collection get(obj) called");
            if (obj == null) return void 0;
            var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
            return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
        },
        // Get the model at the given index.
        at: function(index) {
            console.log("CORE: modelBase Collection at(index) called");
            if (index < 0) index += this.length;
            return this.models[index];
        },
        // Return models with matching attributes. Useful for simple cases of
        // `filter`.
        where: function(attrs, first) {
            console.log("CORE: modelBase Collection where(attrs, first) called");
            var matches = _.matches(attrs);
            return this[first ? 'find' : 'filter'](function(model) {
                return matches(model.attributes);
            });
        },
        // Return the first model with matching attributes. Useful for simple cases
        // of `find`.
        findWhere: function(attrs) {
            console.log("CORE: modelBase Collection findWhere(attrs) called");
            return this.where(attrs, true);
        },
        // Force the collection to re-sort itself. You don't need to call this under
        // normal circumstances, as the set will maintain sort order as each item
        // is added.
        sort: function(options) {
            console.log("CORE: modelBase Collection sort(options) called");
            if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
            options || (options = {});
            // Run sort based on type of `comparator`.
            if (_.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this);
            } else {
                this.models.sort(_.bind(this.comparator, this));
            }
            if (!options.silent) this.trigger('sort', this, options);
            return this;
        },
        // Pluck an attribute from each model in the collection.
        pluck: function(attr) {
            console.log("CORE: modelBase Collection pluck(attr) called");
            return _.invoke(this.models, 'get', attr);
        },
        // Wrap an optional error callback with a fallback error event.
        wrapError: function(model, options) {
            console.log('CORE: mainBase wrapError(model, options) called'); 
            var error = options.error;
            options.error = function(resp) {
              if (error) error(model, resp, options);
              model.trigger('error', model, resp, options);
            };
        },
        // Fetch the default set of models for this collection, resetting the
        // collection when they arrive. If `reset: true` is passed, the response
        // data will be passed through the `reset` method instead of `set`.
        fetch: function(options) {
            console.log("CORE: modelBase Collection fetch(options) called");
            options = options ? _.clone(options) : {};
            if (options.parse === void 0) options.parse = true;
            var success = options.success;
            var collection = this;
            options.success = function(resp) {
                var method = options.reset ? 'reset' : 'set';
                collection[method](resp, options);
                if (success) success(collection, resp, options);
                collection.trigger('sync', collection, resp, options);
            };
            this.wrapError(this, options);
            return this.sync('read', this, options);
        },
        // Create a new instance of a model in this collection. Add the model to the
        // collection immediately, unless `wait: true` is passed, in which case we
        // wait for the server to agree.
        create: function(model, options) {
            console.log("CORE: modelBase Collection create(model, options) called");
            options = options ? _.clone(options) : {};
            if (!(model = this._prepareModel(model, options))) return false;
            if (!options.wait) this.add(model, options);
            var collection = this;
            var success = options.success;
            options.success = function(model, resp) {
                if (options.wait) collection.add(model, options);
                if (success) success(model, resp, options);
            };
            model.save(null, options);
            return model;
        },
        // **parse** converts a response into a list of models to be added to the
        // collection. The default implementation is just to pass it through.
        parse: function(resp, options) {
            console.log("CORE: modelBase Collection parse(resp, options) called");
            return resp;
        },
        // Create a new collection with an identical list of models as this one.
        clone: function() {
            console.log("CORE: modelBase Collection clone() called");
            return new this.constructor(this.models, {
                model: this.model,
                comparator: this.comparator
            });
        },
        // Define how to uniquely identify models in the collection.
        modelId: function (attrs) {
            console.log("CORE: modelBase Collection modelId(attrs) called");
            return attrs[this.model.prototype.idAttribute || 'id'];
        },
        // Private method to reset all internal state. Called when the collection
        // is first initialized or reset.
        _reset: function() {
            console.log("CORE: modelBase Collection _reset() called");
            this.length = 0;
            this.models = [];
            this._byId  = {};
        },
        // Prepare a hash of attributes (or other model) to be added to this
        // collection.
        _prepareModel: function(attrs, options) {
            console.log("CORE: modelBase Collection _prepareModel(attrs, options) called");
            if (this._isModel(attrs)) {
                if (!attrs.collection) attrs.collection = this;
                return attrs;
            }
            options = options ? _.clone(options) : {};
            options.collection = this;
            var model = new this.model(attrs, options);
            if (!model.validationError) return model;
            this.trigger('invalid', this, model.validationError, options);
            return false;
        },
        // Method for checking whether an object should be considered a model for
        // the purposes of adding to the collection.
        _isModel: function (model) {
            console.log("CORE: modelBase Collection _isModel(model) called");
            return model instanceof Model;
        },
        // Internal method to create a model's ties to a collection.
        _addReference: function(model, options) {
            console.log("CORE: modelBase Collection _addReference(model, options) called");
            this._byId[model.cid] = model;
            var id = this.modelId(model.attributes);
            if (id != null) this._byId[id] = model;
            model.on('all', this._onModelEvent, this);
        },
        // Internal method to sever a model's ties to a collection.
        _removeReference: function(model, options) {
            console.log("CORE: modelBase Collection _removeReference(model, options) called");
            if (this === model.collection) delete model.collection;
            model.off('all', this._onModelEvent, this);
        },
        // Internal method called every time a model in the set fires an event.
        // Sets need to update their indexes when models change ids. All other
        // events simply proxy through. "add" and "remove" events that originate
        // in other collections are ignored.
        _onModelEvent: function(event, model, collection, options) {
            console.log("CORE: modelBase Collection _onModelEvent(event, model, collection, options) called");
            if ((event === 'add' || event === 'remove') && collection !== this) return;
            if (event === 'destroy') this.remove(model, options);
            if (event === 'change') {
                var prevId = this.modelId(model.previousAttributes());
                var id = this.modelId(model.attributes);
                if (prevId !== id) {
                    if (prevId != null) delete this._byId[prevId];
                    if (id != null) this._byId[id] = model;
                }
            }
            this.trigger.apply(this, arguments);
        }
    };  //eof modelBase.prototype.Collection.prototype
    // Underscore methods that we want to implement on the Collection.
    // 90% of the core usefulness of Backbone Collections is actually implemented
    // right here:
    var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
        'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
        'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
        'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
        'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
        'lastIndexOf', 'isEmpty', 'chain', 'sample', 'partition'];
    // Mix in each Underscore method as a proxy to `Collection#models`.
    _.each(methods, function(method) {
        if (!_[method]) return;
        modelBase.prototype.Collection.prototype[method] = function() {
            var args = slice.call(arguments);
            args.unshift(this.models);
            return _[method].apply(_, args);
        };
    });
    // Underscore methods that take a property name as an argument.
    var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];
    // Use attributes instead of properties.
    _.each(attributeMethods, function(method) {
        if (!_[method]) return;
        modelBase.prototype.Collection.prototype[method] = function(value, context) {
            var iterator = _.isFunction(value) ? value : function(model) {
                return model.get(value);
            };
            return _[method](this.models, iterator, context);
        };
    });
    return modelBase;
});