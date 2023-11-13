const { Category } = require('../models/Category-model');

// Controller para operações CRUD de categorias
const categoryController = {
  // Criar uma nova categoria
  createCategory: async (req, res) => {
    try {
      const { name, store, products } = req.body;
      // Realize as validações necessárias antes de criar a categoria

      const category = new Category({
        name,
        store,
        products,
      });

      await category.save();
      res.status(201).json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar a categoria' });
    }
  },

  // Listar todas as categorias
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar as categorias' });
    }
  },

  // Obter uma categoria pelo ID
  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Categoria não encontrada' });
      }
      res.json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter a categoria' });
    }
  },

  // Atualizar uma categoria pelo ID
  updateCategory: async (req, res) => {
    try {
      const { name, store, products } = req.body;
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
          name,
          store,
          products,
        },
        { new: true }
      );
      if (!category) {
        return res.status(404).json({ message: 'Categoria não encontrada' });
      }
      res.json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar a categoria' });
    }
  },

  // Excluir uma categoria pelo ID
  deleteCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndDelete(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Categoria não encontrada' });
      }
      res.json({ message: 'Categoria excluída com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir a categoria' });
    }
  },
};

module.exports = categoryController;
