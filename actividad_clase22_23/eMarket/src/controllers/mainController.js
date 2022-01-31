const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const calcFinalPrice = (product) => product.price - (product.price * product.discount/100);

const controller = {
	index: (req, res) => {
		const visited = products.filter(product => product.category === 'visited')
		const inSale = products.filter(product => product.category === 'in-sale')
		res.render('index', {visited : visited, inSale: inSale})
	},
	search: (req, res) => {
		const search = req.query.keywords;

		const searchResults = [];

		for (let i = 0; i < products.length; i ++) {
			if (products[i].name.includes(search)) {
				searchResults.push(products[i]); 
			}
		}

		res.render('results', {search : search, searchResults : searchResults, toThousand: toThousand, calcFinalPrice: calcFinalPrice});
	},
};

module.exports = controller;
