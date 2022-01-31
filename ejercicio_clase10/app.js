const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () =>  console.log('Servidor corriendo'))

app.get('/', (req, res) => {
	let htmlPath = path.resolve(__dirname, './views/home.html');
	res.sendFile(htmlPath);
});

app.get('/404', function (req, res){
	res.send('Error página no encontrada');
});