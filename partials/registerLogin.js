if (Meteor.isClient) {
	Template.register.events({
		'submit form': function(event, template) {
			event.preventDefault();
			var userVar = template.find('#register-username').value;
			var emailVar = template.find('#register-email').value;
			var passVar = template.find('#register-password').value;
			Accounts.createUser({
				username: userVar,
				email: emailVar,
				password: passVar
			}, function(err) {
				if (err) {
					throw new Meteor.error(err);
				} else {

				}
			});
			$('#registerModal').modal('hide');
			template.find('#register-username').value = '';
			template.find('#register-email').value = '';
			template.find('#register-password').value = '';
		}
	});
	Template.login.events({
		'submit form': function(event, template) {
			event.preventDefault();
			var userVar = template.find('#login-username').value;
			var passVar = template.find('#login-password').value;
			Meteor.loginWithPassword(userVar, passVar, function(err) {
				if (err) {
					throw new Meteor.error(err);
				}
			});
			$('#loginModal').modal('hide');
			template.find('#register-username').value = '';
			template.find('#register-password').value = '';
		}
	});
	Template.logout.events({
		'click #logout': function() {
			Meteor.logout();
		}
	});
}
