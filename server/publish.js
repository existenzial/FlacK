Meteor.publish('everyUsername', function(){
    return Meteor.users.find({}, {fields: {
        'username': 1,
        'services.github.username': 1
    }});
});

Meteor.publish('messages', function(channel){
    return Messages.find({channel: channel});
});

Meteor.publish('channels', function(){
    return Channels.find();
});