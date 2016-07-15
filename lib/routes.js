Accounts.onLogin(function() {
	FlowRouter.go('recipe-book');
});
Accounts.onLogout(function() {
	FlowRouter.go('home');
});
FlowRouter.triggers.enter([function(context, redirect) {
	if (!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);
FlowRouter.route('/', {
	name: 'home',
	action: function() {
		if (Meteor.userId()) {
			FlowRouter.go('recipe-book');
		}
		GAnalytics.pageview();
		BlazeLayout.render('homeLayout');
	}
});
FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action: function() {
		GAnalytics.pageview();
		BlazeLayout.render('masterLayout', {main: 'Recipes'});
	}
});
FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action: function() {
		if (!Meteor.userId()) {
			FlowRouter.go('home');
		}
		GAnalytics.pageview();
		BlazeLayout.render('masterLayout', {main: 'RecipeSingle'});
	}
});
FlowRouter.route('/recipe', {
	name: 'recipe',
	action: function() {
		if (!Meteor.userId()) {
			FlowRouter.go('home');
		}
		GAnalytics.pageview();
		BlazeLayout.render('masterLayout', {main: 'RecipeSingle'});
	}
});
FlowRouter.route('/menu', {
	name: 'menu',
	action: function() {
		BlazeLayout.render('masterLayout', {main: 'Menu'});
	}
});
FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action: function() {
		BlazeLayout.render('masterLayout', {main: 'ShoppingList'});
	}
})
