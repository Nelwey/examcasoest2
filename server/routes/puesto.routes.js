const {Router} = require('express');
const router = Router();

const {
  createPuesto
} = require('../controllers/puesto.ctrl');

//New Inquilino
router.post('/puesto/add',createPuesto);



module.exports = router;