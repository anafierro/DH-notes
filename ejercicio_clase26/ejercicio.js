var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const listadoProductos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	remeras: [
		'remera alforzas',
		'remera bordada',
		'musculosa',
	]
}

const recomendados = (req, res) => {
	req.cookies.preferencias = 'vestidos';
	const preferencias = req.cookies.preferencias;
	console.log(listadoProductos.vestidos)
	if (preferencias == 'vestidos') {
		const productos = listadoProductos.vestidos;
		console.log(productos);
		
	} if (preferencias == 'remeras') {
		const productos = listadoProductos.remeras;
	}
		res.render({productos: productos});
		console.log(productos);
}


