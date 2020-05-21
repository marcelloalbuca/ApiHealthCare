const UserModel = require('../model/usuario');

const userRoute = (app) => {

    app.route('/users/:id?')
    .get(async (req, res) => {
        const { id } = req.params
        const query = {};

        if (id) {
            query._id = id
        }

        try {
            const users = await UserModel.find(query)
            res.send({ users })
            
        } catch (error) {
            res.status(400).send({ error: 'Failed to find user' })
        }
    })
    .post(async (req, res) => {

        try {                //validacao
            const user = new UserModel(req.body)
            await user.save()

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
            const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, req.body, {
                new: true,
            });

            console.log(updatedUser)

            if (updatedUser) {
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
            const deletedUser = await UserModel.deleteOne({ _id: id })

            if (deletedUser.deletedCount) {
                return res.send('OK')
            }

            res.status(400).send({ error: 'Could not delete the user' })

        } catch (error) {
            res.send(error)
        }
    })
}
 
module.exports = userRoute
/*

router.get('/', (req, res) => {
     console.log('GET USUARIOS');
     return res.status(200).send({ message: 'GET USUARIO' });
 
 });
 
 router.post('/', (req, res) => {
    console.log('POST USUARIOS');
     return res.send({message: 'POST USUARIO'});
 });

 router.put('/', (req, res) => {
    console.log('PUT USUARIOS');
    return res.status(200).send({ message: 'PUT USUARIO' });

});

router.delete('/', (req, res) => {
   console.log('DELETE USUARIOS');
    return res.send({message: 'DELETE USUARIO'});
});
 
 module.exports = router;

/*

200 - OK
201 - Created
202 - Accepted 

400 - Bad request
401 - Unauthorized -- AUTENTICAÇÃO, tem caráter temporário.
403 - Forbidden -- AUTORIZAÇÃO, tem caráter permanente.
404 - Not found.

500 - Internal server error
501 - Not implemented - a API não suporta essa funcionalidade
503 - Service Unavailable - a API executa essa operação, mas no momento está indisponível


*/