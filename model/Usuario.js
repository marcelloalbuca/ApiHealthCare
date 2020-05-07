const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({

    nome: { type: String, required: true },
    sexo: {type: String, required: true, unique: true},
    endereco: { type: String, required: true },
    dataNascimento: {type: Date, required: true },
    cpfUsuario: {type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    telefone: {type: String, required: true, unique: true},
    created: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Usario', UsuarioSchema);