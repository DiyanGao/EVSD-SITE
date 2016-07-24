 Meteor.methods({
  createreguser: function(student, parent, misc){
    // Checks Student, parent, and misc for pattern
    check(student, {
      firstName: String,
      middleName: String,
      lastName: String,
      DOB: String,
      studentGrade: String,
      emailAddress: String,
      password: String,
      studentPhoneNo: String,
      studentId: String,
      facebookAccount: String,
      facebook: String,
      schoolloop: String
    });
    check(parent, {
      firstParent: String,
      firstParentPhoneNo: String,
      firstParentEmailAddress: String,
      firstParentEmployer: String,
      secondParent: String,
      secondParentPhoneNo: String,
      secondParentEmailAddress: String,
      secondParentEmployer: String
    });
    check(misc, {
        findOut: String,
        whyjoin: String,
        concerns: String
    });

    //idk what this does specifically MARK
    var username = student.emailAddress;
    var email = student.emailAddress;
    var password = student.password;

    //creates the user
    var user = Accounts.createUser({
      username: username,
  //MARK: give the ability to set usrname later
      email: email,
      password: password,
      
      profile: {
        
        firstName: student.firstName,
        middleName: student.middleName,
        lastName: student.lastName,
        DOB: student.DOB,
        studentGrade: student.studentGrade,
        studentPhoneNo: student.studentPhoneNo,
        studentId: student.studentId,
        facebookAccount: student.facebookAccount,
        facebook: student.facebook,
        schoolloop: student.schoolloop,

        firstParent: parent.firstParent,
        firstParentPhoneNo: parent.firstParentPhoneNo,
        firstParentEmailAddress: parent.firstParentEmailAddress,
        firstParentEmployer: parent.firstParentEmployer,
        secondParent: parent.secondParent,
        secondParentPhoneNo: parent.secondParentPhoneNo,
        secondParentEmailAddress: parent.secondParentEmailAddress,
        secondParentEmployer: parent.secondParentEmployer,

        findOut: misc.findOut,
        whyjoin: misc.whyjoin,
        concerns: misc.concerns

      /*stripeId: "Null",
        Donation: "free"*/
      }
      settings{
        role: "user",
        
      }
    });
  }
});