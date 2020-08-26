
const adminCtrl = {};
const Administrador = require('../models/administrador.model');


//render dueño view
adminCtrl.renderAdministradorView = async (req , res) => {
  const administradores = await Administrador.find({});
  res.render('admin/gestionAdministrador', {administradores});
}

//create
adminCtrl.createAdministrador = async ( req, res ) => {
  try {
    const {nombre,nombreUsuario,password,tipo} = req.body;
    const usuario = {
      nombreUsuario,
      password,
      tipo
    }
    const administradorSchema = new Administrador({nombre,usuario});
    const newAdministrador = await administradorSchema.save();
    if(!newAdministrador){
     
      req.flash('error_msg', 'Error al crear el registro');
      return res.redirect('/admin');

    }else{
      req.flash('success_msg', 'Creado Exitosamente!');
      res.redirect('/admin');
    }
    
  } catch (error) {
    req.flash('error_msg', 'Error al crear el registro');
    return res.redirect('/admin');
  }
}


//read

//update

//delete

module.exports = adminCtrl;