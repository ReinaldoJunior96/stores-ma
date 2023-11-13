const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  priceUnique: {
    type: mongoose.Types.Decimal128
  },
  variationsPrice: [{
    description: String, // Exemplo de propriedade de variação (tamanho)
    price: {
      type: mongoose.Types.Decimal128, // Usar 'Decimal128' para valores decimais
    },
  }],
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  photos: [String],
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
  },
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)

module.exports = {
  Product,
}
