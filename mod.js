var evt = require('events');

function User(){
    this.name = "";
    this.surname = "";
}


User.prototype = new evt.EventEmitter();


User.prototype.start = function(){

    this.on('delete', function(){
        console.log("bye");
    });
    
    
    this.prependListener('create', function(){
        console.log("Hi, welcome to our database!")
    });
    this.emit('create');
}


User.prototype.setName = function(n){
    this.name = n;
}

User.prototype.setSurname = function(s){
    this.surname = s;
}

User.prototype.print = function(){
    console.log("name: " + this.name);
    console.log("surname: " +  this.surname);
    this.emit('delete');
}


module.exports.User = User;