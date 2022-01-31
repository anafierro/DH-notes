const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
    console.log(req.method + '' + req.url); //logger middleware, OJO CON EL NEXT
    next()
})

app.use(express.static('public')) //middlewares: funciones que se ejecutan ante cualquier petición, usar la ruta relativa sin el '/'

app.get('/', (req, res) => {
	let htmlPath = path.resolve('./views/index.html');
	res.sendFile(htmlPath);
});

app.get('/home', (req, res) => {
	let htmlPath = path.resolve('./views/index.html');
	res.sendFile(htmlPath);
});

app.get('/lovelace', (req, res) => {
	let htmlPath = path.resolve('./views/lovelace.html');
	res.sendFile(htmlPath);
});

app.get('/turing', (req, res) => {
	let htmlPath = path.resolve('./views/turing.html');
	res.sendFile(htmlPath);
});

app.get('/berners-lee', (req, res) => {
	let htmlPath = path.resolve('./views/berners-lee.html');
	res.sendFile(htmlPath);
});

app.get('/babbage', (req, res) => {
	let htmlPath = path.resolve('./views/babbage.html');
	res.sendFile(htmlPath);
});

app.get('/clarke', (req, res) => {
	let htmlPath = path.resolve('./views/clarke.html');
	res.sendFile(htmlPath);
});

app.get('/hamilton', (req, res) => {
	let htmlPath = path.resolve('./views/hamilton.html');
	res.sendFile(htmlPath);
});

app.get('/hopper', (req, res) => {
	let htmlPath = path.resolve('./views/hopper.html');
	res.sendFile(htmlPath);
});

//console.log(path.join(__dirname, '/views/index.html'));
//console.log(path.resolve('./views/index.html'));

app.listen(3030, () =>  console.log('Servidor corriendo'));
