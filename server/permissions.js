/*Messages.allow({
    insert: function(userId, doc){
        return (userId && doc.user === userId);
        //only allow a user to post if userId & user in the document match the current user's ID
    }
});*/

Meteor.methods({
    newMessage: function (message) {
        message.timestamp = Date.now();
        message.user = Meteor.userId();
        Messages.insert(message);
    }
});