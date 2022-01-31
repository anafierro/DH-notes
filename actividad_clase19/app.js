const express = require('express');
const app = express();
const mainRouter = require('./routes/main')

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
//app.use(express.static(__dirname + '/public'));

app.use(mainRouter);

app.listen(PORT || 3000, () =>  console.log('Servidor corriendo en ' + PORT)); 
//Esto significa: ** si existe la variable PORT, usar el dato ** || ** si no directo a 3000

