FlowRouter.route('/', {
	name: 'home',
	action: function() {
		GAnalytics.pageview();
		BlazeLayout.render('homeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action: function() {
		GAnalytics.pageview();
		BlazeLayout.render('masterLayout', {main: 'Recipes'}); //Renderes the Test template inside the main of masterLayout
	}
});
