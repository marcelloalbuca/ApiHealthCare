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
            res.status(400).send({ error: 'Failed to find user' })
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
            return res.status(400).send({ error: 'pedido ID is missing.' })
        }

        try {
            const updatedPedido = await PedidoModel.findOneAndUpdate({ _id: id }, req.body, {
                new: true,
            });

            console.log(updatedPedido)

            if (updatedPedido) {
                return res.status(200).send('OK')
            }

            res.status(400).send({ error: 'Could not update the user' })

        } catch (error) {
            res.send(error)
        }
    })
    .delete(async (req, res) => {

        const { id } = req.params

        if (!id) {
            return res.status(400).send({ error: 'User ID is missing.' })
        }

        try {
            const deletedPedido = await PedidoModel.deleteOne({ _id: id })

            if (deletedPedido.deletedCount) {
                return res.send('OK')
            }

            res.status(400).send({ error: 'Could not delete the user' })

        } catch (error) {
            res.send(error)
        }
    })
}

module.exports = pedidoRoute


/*
router.get('/', (req, res) => {
     console.log('GET ENFERMEIROS');
     return res.status(200).send({ message: 'GET ENFERMEIRO' });
 
 });
 
 router.post('/', (req, res) => {
    console.log('POST ENFERMEIROS');
     return res.send({message: 'POST ENFERMEIRO'});
 });

 router.put('/', (req, res) => {
    console.log('PUT ENFERMEIROS');
     return res.send({message: 'PUT ENFERMEIRO'});
 });

 router.delete('/', (req, res) => {
    console.log('DELETE ENFERMEIROS');
     return res.send({message: 'DELETE ENFERMEIRO'});
 });
 
 module.exports = router;

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