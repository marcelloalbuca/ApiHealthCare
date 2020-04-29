const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('GET INDEX');
    return res.status(200).send({ message: 'Bem-Vindo!' });

});

router.post('/', (req, res) => {
    console.log('POST INDEX');
    return res.send({message: 'Tudo ok com o método POST da raiz!'});
});

module.exports = router;