const {Router} = require('express');
const router = Router();

const {
  createAdministrador
} = require('../controllers/administrador.ctrl');

//New Dueño
router.post('/admin/add',createAdministrador);



module.exports = router;