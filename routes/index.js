const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Hola soy judiht, esta es mi api:)'));

router.post('/zapatos', controllers.createzapato);
router.get('/zapatos', controllers.getAllzapatos);

module.exports = router;