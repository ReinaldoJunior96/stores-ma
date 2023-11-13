const mong = require('mongoose')
const { Schema } = mong

const contactSchema = new Schema({
  phone: String,
  whatsApp: String,
  email: String,
  instagram: String,
  user: [{
    type: mong.Schema.Types.ObjectId,
    refPath: 'contact',
    default: null
  }],
}, { timestamps: true })

const Contact = mong.model('Contact', contactSchema)

module.exports = {
  Contact
}
