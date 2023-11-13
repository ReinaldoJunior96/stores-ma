const { User, getUser } = require('../models/User')
const asyncMiddleware = require('../middlewares/AsyncMiddleware')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { Types } = require('mongoose')

const userService = {
  createUser: asyncMiddleware(async (req, res) => {

    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) {
      res.status(409)
      throw new Error('E-mail already exists!')
    }

    const { firstName, lastName, email, password } = req.body
    const saltRounds = 10 // Número de rounds de sal (quanto maior, mais seguro)
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    let user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword, // Armazene a senha criptografada no banco de dados
    })

    await user.save()

    user = await User.findOne({ email: req.body.email }, '-password')

    if (!user) {
      res.status(500)
      throw new Error('Error creating user!')
    }

    res.status(201).json(user)
  }),
  getUsers: asyncMiddleware(async (req, res) => {
    const users = await User.find()
    if (!users) {
      res.status(500)
      throw new Error('Internal Error!')
    }
    res.status(200).json(users)
  }),
  getUserById: asyncMiddleware(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
      res.status(400)
      throw new Error('User not found!')
    }
    res.status(200).json(user)
  }),
  updateUser: asyncMiddleware(async (req, res) => {
    const { firstName, lastName, email, password, type, contact, store } = req.body
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        email,
        password,
        type,
        contact,
        store,
      },
      { new: true }
    )
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' })
    }
    res.json(user)
  }),

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

module.exports = userService
