Meteor.publish('everyUsername', function(){
    return Meteor.users.find({}, {fields: {
        'username': 1,
        'services.github.username': 1
    }});
});

Meteor.publish('messages', function(){
    return Messages.find();
});

Meteor.publish('channels', function(){
    return Channels.find();
});