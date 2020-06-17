const PedidoModel = require('../model/pedido');

const pedidoRoute = (app) => {

    app.route('/pedido/:id?')
    .get(async (req, res) => {
        const { id } = req.params
        const query = {};

        if (id) {
            query._id = id
        }

        try {
            const pedido = await PedidoModel.find(query)
            res.send({ pedido })
            
        } catch (error) {
            res.status(400).send({ error: 'Falha ao pesquisar pedido' })
        }
    })
    .post(async (req, res) => {

        try {                //validacao
            const pedido = new PedidoModel(req.body)
            await pedido.save()

            res.status(201).send('OK')
        } catch (error) {
            res.send(error)   
        }
    })
    .put(async (req, res) => {
        const { id } = req.params

        if (!id) {
            return res.status(400).send({ error: 'Falta ID do pedido' })
        }

        try {
            const updatedPedido = await PedidoModel.findOneAndUpdate({ _id: id }, req.body, {
                new: true,
            });

            console.log(updatedPedido)

            if (updatedPedido) {
                return res.status(200).send('OK')
            }

            res.status(400).send({ error: 'Não foi possível atualizar o pedido' })

        } catch (error) {
            res.send(error)
        }
    })
    .delete(async (req, res) => {

        const { id } = req.params

        if (!id) {
            return res.status(400).send({ error: 'ID do pedido não encontrado' })
        }

        try {
            const deletedPedido = await PedidoModel.deleteOne({ _id: id })

            if (deletedPedido.deletedCount) {
                return res.send('OK')
            }

            res.status(400).send({ error: 'Não foi possível excluir o pedido' })

        } catch (error) {
            res.send(error)
        }
    })
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