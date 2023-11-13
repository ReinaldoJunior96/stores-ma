const express = require('express');
const router = express.Router();
const productController = require('../controllers/Product-controller');

// // Rota para criar um novo produto
// router.post('/products', productController.createProduct);

// Rota para listar todos os produtos
router.get('/all', (req, res) => res.json({ message: 'API testadaaa com aaasucesso!' }));

// // Rota para obter um produto pelo ID
// router.get('/products/:id', productController.getProductById);
//
// // Rota para atualizar um produto pelo ID
// router.put('/products/:id', productController.updateProduct);
//
// // Rota para excluir um produto pelo ID
// router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
