Meteor.startup(function(){
    smtp = {
        username: 'ripley36706@gmail.com',
        password: 'x7Ozba7B5N0Yy8x46S_d8A',
        server: 'smtp.mandrillapp.com',
        port: 587
    };
    
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    
});