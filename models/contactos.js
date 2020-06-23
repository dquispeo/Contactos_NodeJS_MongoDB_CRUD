const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contactos = new Schema ({
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        numero: { type: String, required: true },
});

module.exports = mongoose.model('Contactos', Contactos)
