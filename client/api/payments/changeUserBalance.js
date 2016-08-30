if (Meteor.isClient){
	Template.changeUserBalance.helpers({
		users: function(){
			return Meteor.users.find({}); //only return certain fields
			}
		});
	Template.changeUserBalance.events({
		'submit .change-balance':function(event){
			event.preventDefault();
			let username = event.target.user.value;
      let eventName = event.target.name.value;
			let eventAmount = event.target.amount.value;
			let eventDescription = event.target.description.value;
      })
				$addToSet: {"profile.accountBalanceLog": {cc: true, description: eventDescription, checkNo: 0, paymentMethod: "administrative manual payment logging", amount: eventAmount, name: eventName, date: new Date(), dateWritten: new Date(), dateDeposited: new Date(), memo: ""}}
			})
		},
	});
}
