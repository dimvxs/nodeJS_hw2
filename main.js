var user = require('./mod');
var user1 = new user.User;

user1.start();
user1.setName("oleg");
user1.setSurname("pryanikov");
user1.print();