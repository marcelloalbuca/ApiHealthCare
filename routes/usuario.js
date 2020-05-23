const UsersController = require('../controllers/usuario');
const UserModel = require('../model/usuario');

const usersController = new UsersController(UserModel)

const userRoute = (app) => {

    app.route('/users')
    .get(async (req, res) => usersController.findAll(req, res))

    app.route('/users/:id')
    .get(async (req, res) => usersController.getById(req, res))
    
    app.route('/users')
    .post(async (req, res) => usersController.create(req, res))

    app.route('/users/:id')
    .put(async (req, res) => usersController.update(req, res))

    app.route('/users/:id')
    .delete(async (req, res) => usersController.delete(req, res))
}
 
module.exports = userRoute

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