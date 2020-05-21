const EnfermeiroModel = require('../model/enfermeiro');

const enfermeiroRoute = (app) => {

    app.route('/enfermeiro/:id?')
    .get(async (req, res) => {
        const { id } = req.params
        const query = {};

        if (id) {
            query._id = id
        }

        try {
            const enfermeiro = await EnfermeiroModel.find(query)
            res.send({ enfermeiro })
            
        } catch (error) {
            res.status(400).send({ error: 'Failed to find user' })
        }
    })
    .post(async (req, res) => {

        try {                //validacao
            const enfermeiro = new EnfermeiroModel(req.body)
            await enfermeiro.save()

            res.status(201).send('OK')
        } catch (error) {
            res.send(error)   
        }
    })
    .put(async (req, res) => {
        const { id } = req.params

        if (!id) {
            return res.status(400).send({ error: 'User ID is missing.' })
        }

        try {
            const updatedEnfermeiro = await EnfermeiroModel.findOneAndUpdate({ _id: id }, req.body, {
                new: true,
            });

            console.log(updatedEnfermeiro)

            if (updatedEnfermeiro) {
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
            const deletedEnfermeiro = await EnfermeiroModel.deleteOne({ _id: id })

            if (deletedEnfermeiro.deletedCount) {
                return res.send('OK')
            }

            res.status(400).send({ error: 'Could not delete the user' })

        } catch (error) {
            res.send(error)
        }
    })
}

module.exports = enfermeiroRoute


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