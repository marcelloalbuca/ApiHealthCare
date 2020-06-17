const PedidoController = require('../controllers/pedido');
const PedidoModel = require('../model/pedido');

const pedidoController = new PedidoController(PedidoModel)

const pedidoRoute = (app) => {

    app.route('/pedido')
    .get(async (req, res) => pedidoController.findAll(req, res))

    app.route('/pedido/:id')
    .get(async (req, res) => pedidoController.getById(req, res))
    
    app.route('/pedido')
    .post(async (req, res) => pedidoController.create(req, res))

    app.route('/pedido/:id')
    .put(async (req, res) => pedidoController.update(req, res))

    app.route('/pedido/:id')
    .delete(async (req, res) => pedidoController.delete(req, res))
}
 
module.exports = pedidoRoute




/*

200 - OK
201 - Created
202 - Accepted 

400 - Bad request
401 - Unauthorized -- AUTENTICAÇÃO, tem caráter temporário.
403 - Forbidden -- AUTORIZAÇÃO, tem caráter permanente.
404 - Not found..

500 - Internal server error
501 - Not implemented - a API não suporta essa funcionalidade
503 - Service Unavailable - a API executa essa operação, mas no momento está indisponível


*/