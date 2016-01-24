Meteor.startup(function(){
    Factory.define('message', Messages, {
        
        text: function(){
            return Fake.sentence();
        },
        user: Meteor.users.findOne()._id,
        timestamp: Date.now(),
        channel: 'announcements'
        
    });
      
    if (Messages.find({}).count() === 0){
        _(10).times(function(n){
           Factory.create('message'); 
        });
    }
    
//    Messages.remove({}); //remove all dummy msgs on startup
});