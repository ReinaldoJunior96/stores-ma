const mong = require('mongoose')
const jwt = require('jsonwebtoken')
const { Schema } = mong

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true, // Define o campo "email" como único
  },
  password: String,
  type: {
    type: Number,
    default: 0
  },
  contact: {
    type: mong.Schema.Types.ObjectId,
    ref: 'Contact',
    contact: 'User',
    default: null
  },
  store: [{
    type: mong.Schema.Types.ObjectId,
    ref: 'Store',
    default: null
  }],
}, { timestamps: true })

const User = mong.model('User', userSchema)

const getUser = (req) => {
  const header = req.headers['authorization']
  const token = header && header.split(' ')[1]
  const user = jwt.verify(token, process.env.SECRET)
  return user.id
}
module.exports = {
  User,
  getUser
}
