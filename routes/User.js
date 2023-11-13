const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Rota para criar um novo usuário
router.post('/store', (res, req, next) => userController.created(res, req, next));

// Rota para listar todos os usuários
router.get('/all', (res, req, next) => userController.getUsers(res, req, next));

// Rota para obter um usuário pelo ID
router.get('/:id', (res, req, next) => userController.getUserById(res, req, next));

// Rota para atualizar um usuário pelo ID
router.put('/:id',(res, req, next) => userController.updateUser(res, req, next));

// Rota para excluir um usuário pelo ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
