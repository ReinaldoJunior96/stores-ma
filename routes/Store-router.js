const express = require('express')
const router = express.Router()
const storeController = require('../controllers/Store-controller')

// Rota para criar um novo armazém
router.post('/stores', storeController.createStore)

// Rota para listar todos os armazéns
router.get('/stores', storeController.getStores)

// Rota para obter um armazém pelo ID
router.get('/stores/:id', storeController.getStoreById)

// Rota para atualizar um armazém pelo ID
router.put('/stores/:id', storeController.updateStore)

// Rota para excluir um armazém pelo ID
router.delete('/stores/:id', storeController.deleteStore)

module.exports = router
