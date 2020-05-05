const express = require('express');
const router = express.Router();
const Enfermeiro = require('../model/Enfermeiro');
const config = require('../config/config');

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
404 - Not found.

500 - Internal server error
501 - Not implemented - a API não suporta essa funcionalidade
503 - Service Unavailable - a API executa essa operação, mas no momento está indisponível


*/