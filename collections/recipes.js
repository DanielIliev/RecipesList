Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function(userId, doc) {
		return !!userId; //If user id exists you're allowed to add recipe
	},
	update: function(userId, doc) {
		return !!userId; //If user id exists you're allowed to update Menu with recipe
	}
});

Ingredient = new SimpleSchema({
	name: {
		type: String
	},
	amount: {
		type: String
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	description: {
		type: String,
		label: "Description"
	},
	ingredients: {
		type: [Ingredient] // The square brackets generate an option to add more or less ingredients
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId;
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "createdAt",
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState) {
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	deleteRecipe: function(id) {
		Recipes.remove(id);
	}
});

Recipes.attachSchema(RecipeSchema);
