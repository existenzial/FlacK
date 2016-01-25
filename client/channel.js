/*Meteor.startup(function(){
    Session.set('channel', 'general');
});*/

/*Template.channel.events({
    'click .channel': function(e){
        Session.setPersistent('channel', this.name);
    }
});*/

Template.channel.helpers({
    active: function(){
        if (Session.get('channel') === this.name){
            return 'active';
        }
        return '';
    }
});