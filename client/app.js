//grab all of the messages, useful for iterative funcs
Template.messages.helpers({
    messages: Messages.find({})
});

//if user presses 'Enter' after typing a message
Template.footer.events({
    'keypress input': function(event){
        var inputVal = $('.input-box_text').val();
        if(!!inputVal){
            var charCode = (typeof event.which === 'number') ? event.which : event.keyCode;
            if(charCode === 13){
                event.stopPropagation();
                Meteor.call('newMessage', {text: inputVal});
                $('.input-box_text').val('');
                return false;
            }
        }
    }
});

Meteor.methods({
    newMessage: function(message){
        message.timestamp = Date.now();
        message.user = Meteor.userId();
        Messages.insert(message);
    }
});

Template.registerHelper('usernameFromId', function(userId){
    var user = Meteor.users.findOne({_id: userId});
    if (typeof user === 'undefined'){
        return 'Guest';
    }
    if (typeof user.services.github !== 'undefined'){
        return user.services.github.username;
    }
    return user.username;
});

Template.registerHelper('timestampToTime', function(timestamp){
    var date = new Date(timestamp),
        hours = date.getHours(),
        minutes = '0' + date.getMinutes(),
        seconds = '0' + date.getSeconds();
    return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});