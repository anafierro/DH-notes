const { validationResult } = require("express-validator");

const controller = {
	register: (req, res) => {
		return res.render('registerForm');
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		
		if (!resultValidation.isEmpty()) {
			return res.render('registerForm', { 
				errors : resultValidation.mapped(), 
				oldData : req.body 
			});
		}

		let userToCreate = {
			...req.body,
		}

		req.session.userLogged = userToCreate;

		return res.redirect('/users/register');
		
	}
}







module.exports = controller;