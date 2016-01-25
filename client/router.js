Router.configure({
    layoutTemplate: 'app'
});

Router.route('/:channel', function(){
    this.render('messages');
    //renders message template to the channel
    //subscription not necessary, handled at template level already
    //accesses mydomain.com/channel , same as this.params.channel
});

Router.route('/', function(){
    this.redirect('/general');
});