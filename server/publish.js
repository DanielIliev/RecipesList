// Files for publishing all collections used in the app
Meteor.publish('recipes', function() {
	return Recipes.find({author: this.userId}); //Returns the recipes of the current user
});
