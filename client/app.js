//grab all of the messages, useful for iterative funcs
Template.messages.helpers({
    messages: function(){
        return Messages.find({});
    }
});

Template.listings.helpers({
    channels: function(){
        return Channels.find();
    }
});

Template.registerHelper('currentChannel', function(){
    return Session.get('channel');
});

//The below method on the client-side will throw an error b/c it should require permission from server first. Include insert func in server-side code
/*Meteor.methods({
    newMessage: function(userId, message){
        message.timestamp = Date.now();
        message.user = Meteor.userId();
        Messages.insert(message);
    }
});*/

//if user presses 'Enter' after typing a message
Template.footer.events({
    'keypress input': function(event){
        var inputVal = $('.input-box_text').val();
        if(!!inputVal){
            var charCode = (typeof event.which === 'number') ? event.which : event.keyCode;
            if(charCode === 13){
                event.stopPropagation();
                Meteor.call('newMessage', {
                    text: inputVal,
                    channel: Session.get('channel')
                });
                $('.input-box_text').val('');
                return false;
            }
        }
    }
});

Meteor.methods({
  newMessage: function (message) {
  	message.timestamp = Date.now();
    message.user = Meteor.userId();
    Messages.insert(message);
  }
})

Template.registerHelper('usernameFromId', function(userId){
    var user = Meteor.users.findOne({_id: userId});
    if (typeof user === 'undefined'){
        return 'Guest';
    }

    return user.username || user.services.github.username;
});

Template.registerHelper('timestampToTime', function(timestamp){
    var date = new Date(timestamp),
        hours = date.getHours(),
        minutes = '0' + date.getMinutes(),
        seconds = '0' + date.getSeconds(),
        suffix = (hours >= 12) ? 'PM' : 'AM';
    
    if(hours > 12){
        hours = hours -12;
    }
    
    return hours + ':' + minutes.substr(minutes.length-2) + ' ' + suffix;
});