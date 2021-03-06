const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schema = new Schema({
    nome: { type: String, required: true },
    sexo: {type: String, required: true},
    dataNascimento: {type: Date, required: true },
    cpf: {type: String, required: true, unique: true},
    telefone: {type: String, required: true, unique: true},
    coren: {type: String, required: true, unique: true},
    especialidades: {type: String},
    restricoes: {type: String},
    experiencias: {type: String},
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: { type: String, required: true, select: false },
},{
    timestamps: { createdAt: true, updatedAt: true },
    toJSON: { 
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
          }
    },
    versionKey: false,
})

module.exports = mongoose.model('Enfermeiro', schema);