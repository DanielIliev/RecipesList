Template.body.events({
	'click .nav li a': function() {
		var currentWidth = $(document).width();
		if (currentWidth < 767) {
			$('.navbar-collapse').collapse('hide');
		}
	}
});
