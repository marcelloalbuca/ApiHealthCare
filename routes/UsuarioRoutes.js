const express = require('express');
const router = express.Router();
const Usuario = require('../model/Usuario');
const config = require('../config/config');

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