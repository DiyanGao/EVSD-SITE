if (Meteor.isClient){
	Template.userTable.helpers({
		users: function () {
			return Meteor.users.find({}, {
				sort: { "profile.lastName": 1 }
			});
		},
		payContribution: function(){
			return this.profile.payContribution;
		},
		creationDate: function() {
			var date = this.createdAt;
			var month = date.getUTCMonth() + 1; //months from 1-12
			var day = date.getUTCDate();
			var year = date.getUTCFullYear();
			return month + "/" + day + "/" + year;
		},
		lastLogin: function() {
			var date = this.profile.lastLogin;
			if (date == "" || date == null) return "N/A";
			var month = date.getUTCMonth() + 1; //months from 1-12
			var day = date.getUTCDate();
			var year = date.getUTCFullYear();
			return month + "/" + day + "/" + year;
		}
	});
	Template.userTable.events({
		//change user roles
		'change [name="userRole"]': function( event) {
			if (confirm('Are you sure?')){
				let role = $( event.target ).find( 'option:selected' ).val();
				//console.log(role);
				if (role != 'admin'){
					Meteor.call( "setRoleOnUser", {
						user: this._id,
						role: role
					}, ( error, response ) => {
						if ( error ) {
							Bert.alert( error.reason, "warning" );
						}
					});
				} else Bert.alert ("You cannot make this user an admin");
			} else return false;
		},
		'click .remove-user': function(event) {
			console.log(Roles.getRolesForUser(this._id)[0]);
			if(Roles.getRolesForUser(this._id)[0]=="admin"){
				Bert.alert("Cannot remove yourself");//some people just want to watch the world burn
			}else if (confirm("Are you sure?")) {
				Meteor.users.remove({ _id: this._id }, function (error, result) {
					if (error) {
						Bert.alert("Error removing user: " + error);
					} else {
						Bert.alert("Successfully removed user", "success");
					}
				});
			};
		},
	});
}
