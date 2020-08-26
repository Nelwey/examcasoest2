const {Router} = require('express');
const router = Router();

const {
  createContrato
} = require('../controllers/contrato.ctrl');

//New Contrato
router.post('/contrato/add',createContrato);



module.exports = router;