Meteor.users.allow({
  update: function(userId, user) {
    return Roles.userIsInRole( userId, 'admin' );
  }
});