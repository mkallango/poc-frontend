var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open',function(){
  console.bind(console,'connection success...\n');
})

var clienteSchema = mongoose.Schema({
  name: String
})

var Clientes = mongoose.model('Clientes',clienteSchema);

var clnt1 = new Clientes({nome: 'Marcello'});
console.log(clnt1.name);

clnt1.save(function(err, clnt1){
  if (err) return console.error(err);
  console.log("Saved.");
});

Clientes.find(function(err,clients){
  if(err) return console.error(err);
  console.log(clients);
});

Clientes.find({ nome: /~Marcello/ }, callback);

