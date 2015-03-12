/*
 * BookLibraryBase
 */
define(function () {
    console.log('CORE: bookLibraryBase called');	
    function bookLibraryBase(id, configs) {
        this.id = id;
        this.configs = configs;
		var BookView = CORE.main.view.Main.View.extend({
			tagName:"div",
			className:"bookContainer",
			template:$("#bookTemplate").html(),
			render:function () {
				console.log('BookView render called');
				var tmpl = _.template(this.template);//tmpl is a function that takes a JSON and returns html
				this.$el.html(tmpl(this.model.toJSON()));//this.el is what we defined in tagName. 
				//use $el to get access to jQuery html() function
				return this;
			},
			events: {
				"click .delete": "deleteBook"
			},
			deleteBook:function () {
				//Delete model
				this.model.destroy();
				//Delete view
				this.remove();
			}
		});
		var LibraryView = CORE.main.view.Main.View.extend({
			//A view can take either a tagName, as we saw in our BookView, or an el. 
			//When we use tagName, the view will create the element for us, but we are responsible for inserting it into the page. 
			//When we use el we specify an existing element in the page and the view will write directly into the page, into the specified element. 
			//In this case we select the div with id=”books”.
			el:$("#books"),
			//This is a special (but optional) property that must contain a function. 
			//This function will be called by Backbone when the view constructor is called		
			initialize:function(){
				//Create a new Library (collection of Book models) and store it in a local property called “collection”.
				this.collection = new CORE.main.models.Library.Model(books);
				//It call its own render function, which means that as soon as we call the LibraryView constructor it will get rendered, so this is a self rendering view. 
				//We don’t have to make it self rendered but it is common practice.
				this.render();
				//When a model is added to a collection, the collection will fire an add event. 
				//If we listen to this event we will be able to call our renderBook function.
				this.collection.on("add", this.renderBook, this);
				this.collection.on("remove", this.removeBook, this);
			},
			render: function(){
				//We store a reference to the current object in a variable “that”
				var that = this;
				//Use the each function of underscore to iterate over all the models (Books) in our collection. 
				//The first argument to “each” is the array that will be iterated over. 
				//The second argument is the function that will be applied to each member of the array. 
				//The function in our case calls the renderBook function with the current model as argument. 
				//We need to use “that” to get this right since if we would have used “this” it would have referenced the function itself. 
				//The third argument (this) is the context that each is executing in.
				_.each(this.collection.models, function(item){
					that.renderBook(item);
				}, this);
			},
			addBook: function(e){
				//Prevent the form from actually submit and reloading the page.
				e.preventDefault();
				//Here I select all the input elements the form and iterate over them using jQuerys each. 
				//Since we used the same names for ids in our form as the keys on our Book model we can simply store them directly in the formData object and the add it to the books array. 
				var formData = {};
				$("#addBook div").children("input").each(function(i, el){
					//Check to see if the field value is empty, in which case we do not add it to the model data.
					if ($(el).val() !== "") {
						formData[el.id] = $(el).val();
					}
				});
				books.push(formData);
				//We then create a new Book model and add it to our collection.
				this.collection.add(new CORE.main.models.Book.Model(formData));
			},
			removeBook: function(removedBook){
				var removedBookData = removedBook.attributes;
				//Since the default values was not saved in the books array we need to remove them in order to find an match. 
				//We use underscores each function to iterate over the properties of the removed Book model and delete any property that is equal to the default value. 
				//Since the underscore each function also is capable of iterating over objects in an array we use it again to iterate over the objects in our books array to find the data of the removed Book. 
				//To get a match we use the isEqual function of underscore that performs a deep comparison of objects. 
				//Similarly the indexOf can find complex objects, which we use when we remove the book data using splice.
				_.each(removedBookData, function(val, key){
					if(removedBookData[key] === removedBook.defaults[key]){
						delete removedBookData[key];
					}
				});
				_.each(books, function(book){
					if(_.isEqual(book, removedBookData)){
						books.splice(_.indexOf(books, book), 1);
					}
				});
			},
			events:{
				"click #add":"addBook"
			},
			//This function takes a model (a Book) as argument and uses it to create a BookView. 
			renderBook:function(item){
				var bookView = new BookView({
					model: item
				});
				//The bookView is then rendered and appended to the view container as specified in our el property
				this.$el.append(bookView.render().el);
			}
		});
		
		// NOTE: books are data and should probably be kept in a module other than this. TO DO: move
		var books = [{title:"JS the good parts", author:"John Doe", releaseDate:"2012", keywords:"JavaScript Programming"},
        {title:"CS the better parts", author:"John Doe", releaseDate:"2012", keywords:"CoffeeScript Programming"},
        {title:"Scala for the impatient", author:"John Doe", releaseDate:"2012", keywords:"Scala Programming"},
        {title:"American Psyco", author:"Bret Easton Ellis", releaseDate:"2012", keywords:"Novel Splatter"},
        {title:"Eloquent JavaScript", author:"John Doe", releaseDate:"2012", keywords:"JavaScript Programming"}];
		
		var libraryView = new LibraryView(); // Should probably be moved to viewController
		
    };
    bookLibraryBase.prototype = {
        getConfigs: function () {
            console.log('CORE: bookLibraryBase getConfigs() called');            
            return this.configs;
        }
    };
    return bookLibraryBase;
});
