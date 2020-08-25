const {Router} = require('express');
const router = Router();

const {
  createInquilino
} = require('../controllers/inquilino.ctrl');

//New Inquilino
router.post('/inquilino/add',createInquilino);



module.exports = router;