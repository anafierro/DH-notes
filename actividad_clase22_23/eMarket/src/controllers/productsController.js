const fs = require('fs');
const path = require('path');
const { deflateRaw } = require('zlib');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const calcFinalPrice = (product) => product.price - (product.price * product.discount/100);

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {products : products, toThousand : toThousand, calcFinalPrice : calcFinalPrice})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = parseInt(req.params.id, 10)
		const product = products.find(p => p.id === id)
		res.render('detail', {product : product, toThousand : toThousand, calcFinalPrice : calcFinalPrice})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const product = {
			id: Date.now(),
			name: req.body.name,
			price: parseInt(req.body.price),
			discount: parseInt(req.body.discount),
			category: req.body.category,
			description: req.body.description	
		}

		console.log(req.file);

		if (req.file === undefined) {
			product.image = 'default-image.png';
		  } else {
			product.image = req.file.filename;
		  }

		products.push(product); 

		productsJSON = JSON.stringify(products, null, 2);

		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = parseInt(req.params.id);
		const productToEdit = products.find(product => product.id === id);
		
		res.render('product-edit-form', {productToEdit : productToEdit});
	},
	// Update - Method to update
	update: (req, res) => {

		const id = parseInt(req.params.id);
		const productToEdit = products.find(product => product.id === id);
		
			productToEdit.name = req.body.name;
			productToEdit.price = parseInt(req.body.price);
			productToEdit.discount = parseInt(req.body.discount);
			productToEdit.category = req.body.category;
			productToEdit.description = req.body.description;
			
			console.log(req.file);

			if (req.file === undefined) {
				productToEdit.image = 'default-image.png';
			  } else {
				productToEdit.image = req.file.filename;
			  }
		
		productsJSON = JSON.stringify(products, null, 2);

		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/products')
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const id = parseInt(req.params.id);
		const productToDelete = products.find(product => product.id === id);
		
		products.splice(products.indexOf(productToDelete), 1);
		
		productsJSON = JSON.stringify(products, null, 2);

		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/products')
	}
};

module.exports = controller;