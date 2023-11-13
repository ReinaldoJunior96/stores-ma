const { Store } = require('../models/Store-model');

// Controller para operações CRUD de armazéns
const storeController = {
  // Criar um novo armazém
  createStore: async (req, res) => {
    try {
      const { name, cnpj, cpf, contact, user } = req.body;
      // Realize as validações necessárias antes de criar o armazém

      const store = new Store({
        name,
        cnpj,
        cpf,
        contact,
        user,
      });

      await store.save();
      res.status(201).json(store);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar o armazém' });
    }
  },

  // Listar todos os armazéns
  getStores: async (req, res) => {
    try {
      const stores = await Store.find();
      res.json(stores);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar os armazéns' });
    }
  },

  // Obter um armazém pelo ID
  getStoreById: async (req, res) => {
    try {
      const store = await Store.findById(req.params.id);
      if (!store) {
        return res.status(404).json({ message: 'Armazém não encontrado' });
      }
      res.json(store);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter o armazém' });
    }
  },

  // Atualizar um armazém pelo ID
  updateStore: async (req, res) => {
    try {
      const { name, cnpj, cpf, contact, user } = req.body;
      const store = await Store.findByIdAndUpdate(
        req.params.id,
        {
          name,
          cnpj,
          cpf,
          contact,
          user,
        },
        { new: true }
      );
      if (!store) {
        return res.status(404).json({ message: 'Armazém não encontrado' });
      }
      res.json(store);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar o armazém' });
    }
  },

  // Excluir um armazém pelo ID
  deleteStore: async (req, res) => {
    try {
      const store = await Store.findByIdAndDelete(req.params.id);
      if (!store) {
        return res.status(404).json({ message: 'Armazém não encontrado' });
      }
      res.json({ message: 'Armazém excluído com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir o armazém' });
    }
  },
};

module.exports = storeController;
