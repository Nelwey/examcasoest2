const inquilinoCtrl = {};
const Inquilino = require('../models/inquilino.model');


//create
inquilinoCtrl.createInquilino = async ( req, res ) => {
  try {
    const {nombres,apellidos,ci,telefono} = req.body;
    const inquilinoSchema = new Inquilino({nombres,apellidos,ci,telefono});
    const newInquilino = await inquilinoSchema.save();
    if(!newInquilino){
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

module.exports = inquilinoCtrl;