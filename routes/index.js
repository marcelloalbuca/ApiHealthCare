const express = require('express');
const router = express.Router();
//const auth = require('../middlewares/auth');

router.get('/', (req, res) => {
   // console.log(res.locals.auth_data);
    console.log('GET INDEX');
    return res.send({message: 'Bem-Vindo!'});
});

router.post('/', (req, res) => {
    console.log('POST INDEX');
    return res.send({message: 'Tudo ok com o método POST da raiz!'});
    
});

module.exports = router;