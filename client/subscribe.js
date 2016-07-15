/* Subscribe and fetch all the currently logged user recipes */
Template.Recipes.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.Recipes.events({
	'click .toggle-new-recipe': function() {
		Session.set('newRecipe', true);
	}
});

Template.Recipes.helpers({
	recipes: function() {
		return Recipes.find({});
	}
});

/* Subscribe and fetch a single recipe */
Template.RecipeSingle.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
	});
});

Template.RecipeSingle.helpers({
	recipe: function() {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}
});

/* Add - Remove - Update a recipe */
Template.Recipe.onCreated(function() {
	this.editMode = new ReactiveVar(false);
});
Template.Recipe.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function() {
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil': function(event, template) {
		template.editMode.set(!template.editMode.get());
	}
});

Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}
});

/* Menu handlers */
Template.Menu.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.Menu.helpers({
	recipes: function() {
		return Recipes.find({inMenu: true});
	}
});

/* Shopping list handlers */
Template.ShoppingList.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});
Template.ShoppingList.helpers({
	shoppingList: function() {
		return Recipes.find({inMenu: true});
	}
});

/* New Recipe panel handlers */
Template.newRecipe.events({
	'click .fa-close': function() {
		Session.set('newRecipe', false);
	}
});
