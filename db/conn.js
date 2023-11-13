const mongoose = require('mongoose');

async function main() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://127.0.0.1:27017/store-ma');
  } catch (erro) {
    console.log('Erro na conexão: ' + erro);
  }
}

module.exports = main;
