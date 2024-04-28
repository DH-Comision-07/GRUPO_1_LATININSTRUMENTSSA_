const User = require('../models/User');



function userLoggedMidd(req,res,next){
res.locals.isLogged = false;


let nameInCookie = req.cookies.userName;
let userFromCookie = User.findByField('name',nameInCookie);

if (userFromCookie){
    req.session.userLogged = userFromCookie;
}

if(req.session.userLogged){
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
};


next();
};
module.exports=userLoggedMidd;