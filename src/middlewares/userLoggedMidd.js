const User = require("../database/models/User.js");

async function userLoggedMidd(req, res, next) {
	res.locals.isLogged = false;

	let nameInCookie = req.cookies.userName;
	if (nameInCookie) {
		let userFromCookie = await User.findOne({ where: { name: nameInCookie } });
		if (userFromCookie) {
			req.session.userLogged = userFromCookie;
		}
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMidd;
