var evt = require('events'); //подключаем модуль с ивентами в наш модуль

var emitter = new evt.EventEmitter(); //создаём обьект генерирующий событие



emitter.on('create', function(){
    console.log('Welcome to our community!');
});

emitter.on('create', function(name){
console.log("Hi, " + name + "!");
});

emitter.emit('create', "alik");
