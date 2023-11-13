const mong = require('mongoose')
const { Schema } = mong

const categorySchema = new Schema({
  name: String,
  store: {
    type: mong.Schema.Types.ObjectId,
    ref: 'Store',
    default: null
  },
  products: [{
    type: mong.Schema.Types.ObjectId,
    ref: 'Product',
    default: null
  }]
}, { timestamps: true })

const Category = mong.model('Category', categorySchema)

module.exports = {
  Category
}
