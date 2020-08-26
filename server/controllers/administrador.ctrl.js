
const puestoCtrl = {};
const Administrador = require('../models/administrador.model');


//create
puestoCtrl.createAdministrador = async ( req, res ) => {
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
      return res.status(500).json({
        ok:false,
        message: 'Error al crear el registro' 
      });
    }else{
      res.status(200).json({
        ok:true,
        message: 'Creado exitosamente' 
      });
    }

    
  } catch (error) {

    res.status(500).json({
      ok:false,
      message: error 
    });
    
  }
}


//read

//update

//delete

module.exports = puestoCtrl;