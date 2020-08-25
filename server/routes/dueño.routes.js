const {Router} = require('express');
const router = Router();

const {
  createDueño
} = require('../controllers/dueño.ctrl');

//New Dueño
router.post('/dueno/add',createDueño);



module.exports = router;