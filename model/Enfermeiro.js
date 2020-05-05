const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnfermeiroSchema = new Schema({

    nome: { type: String, required: true },
    sexo: {type: String, required: true, unique: true},
    endereco: { type: String, required: true },
    dataNascimento: {type: Date, required: true },
    cpf: {type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    telefone: {type: String, required: true, unique: true},
    coren: {type: String, required: true, unique: true},
    especialidades: {type: String, required: true},
    tipoServico: {type: String, required: true},
    valorServico: {type: String, required: true},
    descricao: {type: String, required: false},
    restricoes: {type: String, required: false},
    experiencias: {type: String, required: false},
    created: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Enfermeiro', EnfermeiroSchema);