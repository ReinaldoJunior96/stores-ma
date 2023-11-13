const userService = require('../services/User.service')
const { User } = require('../models/User')

const userController = {
  created: async (req, res, next) => {
    await userService.createUser(req, res, next)
  },
  getUsers: async (req, res, next) => {
    await userService.getUsers(req, res, next)
  },

  getUserById: async (req, res, next) => {
    await userService.getUserById(req, res, next)
  },

  // Atualizar um usuário pelo ID
  updateUser: async (req, res) => {

  },

  // Excluir um usuário pelo ID
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
      }
      res.json({ message: 'Usuário excluído com sucesso' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Erro ao excluir o usuário' })
    }
  },

  login: async (req, res) => {
    console.log(req.body)
    const user = await model.findOne({ email: req.body.email })
    if (!user) {
      return res.status(500).json({ message: 'Invalid user!' })
    }

    const secret = process.env.SECRET
    const token = jwt.sign({ id: user._id }, secret)

    if (!token) {
      return res.status(500).json({ message: 'Error generating token!' })
    }

    return res.status(200).json({ token, user })
  },
  userWithAppointments: async (req, res) => {
    try {
      const response = await model.findById(getUser(req)).populate('appointments')

      return res.status(200).json(response)
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: 'Error' })
    }
  }
}

module.exports = userController
