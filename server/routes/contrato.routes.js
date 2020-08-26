const {Router} = require('express');
const router = Router();

const {
  createContrato,
  renderContratoView
} = require('../controllers/contrato.ctrl');

//Render Dueño View
router.get('/contrato',renderContratoView);

//New Contrato
router.post('/contrato/add',createContrato);



module.exports = router;