const { Product } = require('../models/Product-model');

// Controller para operações CRUD de produtos
const productController = {
  // Criar um novo produto
  createProduct: async (req, res) => {
    try {
      const { name, description, priceUnique, variationsPrice, category, photos, store } = req.body;

      // Realize as validações necessárias antes de criar o produto
      // Exemplo: validar se os campos obrigatórios estão presentes

      const product = new Product({
        name,
        description,
        priceUnique,
        variationsPrice,
        category,
        photos,
        store,
      });

      await product.save();
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar o produto' });
    }
  },

  // Listar todos os produtos
  getProducts: async (req, res) => {
    try {
      // const products = await Product.find();
      res.json({mgs: 'Asd'});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar os produtos' });
    }
  },

  // Obter um produto pelo ID
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter o produto' });
    }
  },

  // Atualizar um produto pelo ID
  updateProduct: async (req, res) => {
    try {
      const { name, description, priceUnique, variationsPrice, category, photos, store } = req.body;
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name,
          description,
          priceUnique,
          variationsPrice,
          category,
          photos,
          store,
        },
        { new: true }
      );
      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar o produto' });
    }
  },

  // Excluir um produto pelo ID
  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
      res.json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir o produto' });
    }
  },
};

module.exports = productController;
