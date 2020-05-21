const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PedidoSchema = new Schema({

    idPedido: { type: String, required: true },
    dataPedido: { type: Date, default: Date.now },
    tipoServico: { type: String, required: true },
    valorServico: { type: String, required: true },
    cpfUsuario: { type: String, required: true },
    cpfEnfermeiro: { type: String, required: true },
    created: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Pedido', PedidoSchema);