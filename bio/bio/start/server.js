var user = require('./user');
var ira = new user.User('Ira');
var anna = new user.User('Anna');

ira.hello(anna);
