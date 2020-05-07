const express = require('express');
const router = express.Router();
const Pedido = require('../model/Pedido');
const config = require('../config/config');

router.get('/', (req, res) => {
     console.log('GET PEDIDOS');
     return res.status(200).send({ message: 'GET PEDIDO' });
 
 });
 
 router.post('/', (req, res) => {
    console.log('POST PEDIDOS');
     return res.send({message: 'POST PEDIDO'});
 });

 router.put('/', (req, res) => {
    console.log('PUT PEDIDOS');
    return res.status(200).send({ message: 'PUT PEDIDO' });

});

router.delete('/', (req, res) => {
   console.log('DELETE PEDIDOS');
    return res.send({message: 'DELETE PEDIDO'});
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