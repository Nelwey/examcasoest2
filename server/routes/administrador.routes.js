const {Router} = require('express');
const router = Router();

const {
  createAdministrador,
  renderAdministradorView
} = require('../controllers/administrador.ctrl');

//Render Dueño View
router.get('/admin',renderAdministradorView);


//New Dueño
router.post('/admin/add',createAdministrador);



module.exports = router;