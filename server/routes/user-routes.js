const UserRoutes = require('express').Router();
const UserController = require('../controllers/user-controller')

UserRoutes.post('/',UserController.register);
UserRoutes.post('/login',UserController.login);


module.exports = UserRoutes;