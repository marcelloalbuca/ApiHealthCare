const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schema = new Schema({
    cpfUsuario: { type: String, required: true },
    emailUsuario: { type: String, required: true },
    cpfEnfermeiro: { type: String, required: true },
    emailEnfermeiro: { type: String, required: true },
    tipoServico: { type: String, required: true },
    enderecoServico: { type: String, required: true },
    valorServico: { type: String, required: true },
    status: { type: String },

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

module.exports = mongoose.model('Pedido', schema);