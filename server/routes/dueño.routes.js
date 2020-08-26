const {Router} = require('express');
const router = Router();

const {
  createDueño,
  renderDueñoView
} = require('../controllers/dueño.ctrl');

//Render Dueño View
router.get('/dueno',renderDueñoView);

//New Dueño
router.post('/dueno/add',createDueño);



module.exports = router;