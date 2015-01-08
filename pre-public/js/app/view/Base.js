/*
 * ViewBase
 */
define(function () {
    console.log('CORE: ViewBase called');   
    function viewBase(id, options) { // Extended with options for Backbone adopted functionality
        this.id = id;
        this.keyValuePairs = {};  
        // Adopted from Backbone View
        this.cid = _.uniqueId('view');
        options || (options = {});
        _.extend(this, _.pick(options, viewOptions));
        this._ensureElement();
        this.initialize.apply(this, arguments);
    };
    viewBase.prototype = {
        getValue: function (key) {
            console.log('CORE: ViewBase getValue(key) called');
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
            console.log('CORE: ViewBase setValue(key, value) called'); 
            // To Do: search for key in keyValuePairs and updated its value           
            // value = value;
        },
        getKeyValuePairs: function () {
            console.log('CORE: ViewBase getKeyValuePairs() called');             
            return this.keyValuePairs;
        },
        setKeyValuePairs: function (keyValuePairs) {
            console.log('CORE: ViewBase setKeyValuePairs(keyValuePairs) called');         
            this.keyValuePairs = keyValuePairs;
        },      
        setViewService: function (viewService) {
            console.log('CORE: ViewBase setViewService(viewService) called');
            // The view instance has a property called "viewService"
            // created from the viewService.                
            this.viewService = viewService;
        },
        // A view might have a function that returns the rendered output.
        getView: function(key) {
            console.log('CORE: ViewBase getView() called');
            try {
                this.view = this.getValue(key);
                console.log('CORE: ViewBase this.view:');
                console.log(this.view);
                return this.view;
            }
            catch(e) {
                console.log('CORE: ViewBase getView(key) error:');
                console.log(e);
                return;
            }
        },
        renderView: function (elementId) {
            console.log('CORE: ViewBase renderView(elementId) called');
            console.log('elementId = ' + elementId);
            try {
                document.getElementById(elementId).innerHTML = this.getView('htmlSource');
                var templates = this.getValue('templates')[0];
                console.log("CORE: templates = ");
                console.log(templates);
                for(key in templates) {
                    var templateTag = document.createElement('script');                
                    // Add the templates of the view
                    templateTag.type = "text/template";    
                    templateTag.id = key; // Use key value from templates collection as the id
                    templateTag.innerHTML = templates[key];
                    console.log("CORE: template templateTag = ");
                    console.log(templateTag);
                    document.getElementsByTagName('templates')[0].appendChild(templateTag);
                }
                // Add the scriptSource of the view
                var scriptTag = document.createElement('script');
                scriptTag.type = "text/javascript";
                scriptTag.src = this.getValue('scriptSource');
                document.getElementsByTagName('head')[0].appendChild(scriptTag);
            }
            catch(e) {
                console.log('CORE: ViewBase renderView(elementId) error:');
                console.log(e);
            }
        }
    };
    // Adopted from Backbone 
    // Cached regex to split keys for `delegate`.
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;
    // List of view options to be merged as properties.
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

// ----------------- START OF EVENTS -----------------

    // Move the below EVENT code into its own module 'modelEvent'

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
    var Events = viewBase.Events = {
        // Bind an event to a `callback` function. Passing `"all"` will bind
        // the callback to all events fired.
        on: function(name, callback, context) {
            console.log("CORE: viewBase Events on(name, callback, context) called");
            if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
            this._events || (this._events = {});
            var events = this._events[name] || (this._events[name] = []);
            events.push({callback: callback, context: context, ctx: context || this});
            return this;
        },
        // Bind an event to only be triggered a single time. After the first time
        // the callback is invoked, it will be removed.
        once: function(name, callback, context) {
            console.log("CORE: viewBase Events once(name, callback, context) called");
            if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
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
            console.log("CORE: viewBase Events off(name, callback, context) called");
            if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
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
        // Trigger one or many events, firing all bound callbacks. Callbacks are
        // passed the same arguments as `trigger` is, apart from the event name
        // (unless you're listening on `"all"`, which will cause your callback to
        // receive the true name of the event as the first argument).
        trigger: function(name) {
            console.log("CORE: viewBase Events trigger(name) called");
            if (!this._events) return this;
            var args = slice.call(arguments, 1);
            if (!eventsApi(this, 'trigger', name, args)) return this;
            var events = this._events[name];
            var allEvents = this._events.all;
            if (events) triggerEvents(events, args);
            if (allEvents) triggerEvents(allEvents, arguments);
            return this;
        },
        // Inversion-of-control versions of `on` and `once`. Tell *this* object to
        // listen to an event in another object ... keeping track of what it's
        // listening to.
        listenTo: function(obj, name, callback) {
            console.log("CORE: viewBase Events listenTo(obj, name, callback) called");
            var listeningTo = this._listeningTo || (this._listeningTo = {});
            var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
            listeningTo[id] = obj;
            if (!callback && typeof name === 'object') callback = this;
            obj.on(name, callback, this);
            return this;
        },
        listenToOnce: function(obj, name, callback) {
            console.log("CORE: viewBase Events listenToOnce(obj, name, callback) called");
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
            console.log("CORE: viewBase Events stopListening(obj, name, callback) called");
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
    }; // eof Events
    // Regular expression used to split event strings.
    var eventSplitter = /\s+/;
    // Implement fancy features of the Events API such as multiple event
    // names `"change blur"` and jQuery-style event maps `{change: action}`
    // in terms of the existing API.
    var eventsApi = function(obj, action, name, rest) {
        console.log("CORE: viewBase eventsApi(obj, action, name, rest) called");
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
    };
    // A difficult-to-believe, but optimized internal dispatch function for
    // triggering events. Tries to keep the usual cases speedy (most internal
    // Backbone events have 3 arguments).
    var triggerEvents = function(events, args) {
        console.log("CORE: viewBase triggerEvents(events, args) called");
        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
        switch (args.length) {
            case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
            case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
            case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
            case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
            default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
        }
    };
    // Aliases for backwards compatibility.
    Events.bind   = Events.on;
    Events.unbind = Events.off;
    // Allow the `Backbone` object to serve as a global event bus, for folks who
    // want global "pubsub" in a convenient place.
    _.extend(Backbone, Events);  // We probably don't want this dependency on Backbone

// ------------------ END OF EVENTS -----------------

    // Set up all inheritable **Backbone.View** properties and methods.
    _.extend(viewBase.prototype, Events, {
        // The default `tagName` of a View's element is `"div"`.
        tagName: 'div',
        // jQuery delegate for element lookup, scoped to DOM elements within the
        // current view. This should be preferred to global lookups where possible.
        $: function(selector) {
          return this.$el.find(selector);
        },
        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){
            console.log("CORE: viewBase initialize() called");
            // This can be overwritten for a specific object
        },
        // **render** is the core function that your view should override, in order
        // to populate its element (`this.el`), with the appropriate HTML. The
        // convention is for **render** to always return `this`.
        render: function() {
            console.log("CORE: viewBase render() called");
            return this;
        },
        // Remove this view by taking the element out of the DOM, and removing any
        // applicable Backbone.Events listeners.
        remove: function() {
            console.log("CORE: viewBase remove() called");
            this._removeElement();
            this.stopListening();
            return this;
        },
        // Remove this view's element from the document and all event listeners
        // attached to it. Exposed for subclasses using an alternative DOM
        // manipulation API.
        _removeElement: function() {
            console.log("CORE: viewBase _removeElement() called");
            this.$el.remove();
        },
        // Change the view's element (`this.el` property) and re-delegate the
        // view's events on the new element.
        setElement: function(element) {
            console.log("CORE: viewBase setElement(element) called");
            this.undelegateEvents();
            this._setElement(element);
            this.delegateEvents();
            return this;
        },
        // Creates the `this.el` and `this.$el` references for this view using the
        // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
        // context or an element. Subclasses can override this to utilize an
        // alternative DOM manipulation API and are only required to set the
        // `this.el` property.
        _setElement: function(el) {
            console.log("CORE: viewBase _setElement() called");
        // ORIGINAL    this.$el = el instanceof Backbone.$ ? el : Backbone.$(el); // TO DO: Make independent of Backbone
            this.$el = el instanceof CORE.main.$ ? el : CORE.main.$(el);
            this.el = this.$el[0];
        },
        // Set callbacks, where `this.events` is a hash of
        //
        // *{"event selector": "callback"}*
        //
        //     {
        //       'mousedown .title':  'edit',
        //       'click .button':     'save',
        //       'click .open':       function(e) { ... }
        //     }
        //
        // pairs. Callbacks will be bound to the view, with `this` set properly.
        // Uses event delegation for efficiency.
        // Omitting the selector binds the event to `this.el`.
        delegateEvents: function(events) {
            console.log("CORE: viewBase delegateEvents(events) called");
            if (!(events || (events = _.result(this, 'events')))) return this;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method)) method = this[events[key]];
                if (!method) continue;
                var match = key.match(delegateEventSplitter);
                this.delegate(match[1], match[2], _.bind(method, this));
            }
            return this;
        },
        // Add a single event listener to the view's element (or a child element
        // using `selector`). This only works for delegate-able events: not `focus`,
        // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
        delegate: function(eventName, selector, listener) {
            console.log("CORE: viewBase delegate(eventName, selector, listener) called");
            this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
        },
        // Clears all callbacks previously bound to the view by `delegateEvents`.
        // You usually don't need to use this, but may wish to if you have multiple
        // Backbone views attached to the same DOM element.
        undelegateEvents: function() {
            console.log("CORE: viewBase undelegateEvents() called");
            if (this.$el) this.$el.off('.delegateEvents' + this.cid);
            return this;
        },
        // A finer-grained `undelegateEvents` for removing a single delegated event.
        // `selector` and `listener` are both optional.
        undelegate: function(eventName, selector, listener) {
            console.log("CORE: viewBase undelegate(eventName, selector, listener) called");
            this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
        },
        // Produces a DOM element to be assigned to your view. Exposed for
        // subclasses using an alternative DOM manipulation API.
        _createElement: function(tagName) {
            console.log("CORE: viewBase _createElement(tagName) called");
            return document.createElement(tagName);
        },
        // Ensure that the View has a DOM element to render into.
        // If `this.el` is a string, pass it through `$()`, take the first
        // matching element, and re-assign it to `el`. Otherwise, create
        // an element from the `id`, `className` and `tagName` properties.
        _ensureElement: function() {
            console.log("CORE: viewBase _ensureElement() called");
            if (!this.el) {
                var attrs = _.extend({}, _.result(this, 'attributes'));
                if (this.id) attrs.id = _.result(this, 'id');
                if (this.className) attrs['class'] = _.result(this, 'className');
                this.setElement(this._createElement(_.result(this, 'tagName')));
                this._setAttributes(attrs);
            } else {
                this.setElement(_.result(this, 'el'));
            }
        },
        // Set attributes from a hash on this view's element.  Exposed for
        // subclasses using an alternative DOM manipulation API.
        _setAttributes: function(attributes) {
            console.log("CORE: viewBase _setAttributes() called");
            this.$el.attr(attributes);
        }
    });
    return viewBase;
});
