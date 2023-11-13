const mong = require('mongoose')
const { Schema } = mong

const storeSchema = new Schema({
  name: String,
  cnpj: String,
  cpf: String,
  contact: [{
    type: mong.Schema.Types.ObjectId,
    ref: 'Contact',
    contact: 'Store',
    default: null
  }],
  user: {
    type: mong.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
}, { timestamps: true })

const Store = mong.model('Store', storeSchema)

module.exports = {
  Store
}
