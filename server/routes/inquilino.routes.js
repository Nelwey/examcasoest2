const {Router} = require('express');
const router = Router();

const {
  createInquilino,
  renderInquilinoView
} = require('../controllers/inquilino.ctrl');

//Render Inquilino View
router.get('/inquilino',renderInquilinoView);

//New Inquilino
router.post('/inquilino/add',createInquilino);



module.exports = router;