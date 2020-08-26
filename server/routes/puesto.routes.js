const {Router} = require('express');
const router = Router();

const {
  createPuesto,
  renderPuestoView
} = require('../controllers/puesto.ctrl');

//Render Puesto View
router.get('/puesto',renderPuestoView);

//New Inquilino
router.post('/puesto/add',createPuesto);



module.exports = router;