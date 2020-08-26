const {Router} = require('express');
const router = Router();

const {
  renderIndex
} = require('../controllers/index.ctrl');

//New Contrato
router.get('/',renderIndex);



module.exports = router;