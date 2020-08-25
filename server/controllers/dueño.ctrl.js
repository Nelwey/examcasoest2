const dueñoCtrl = {};
const Dueño = require('../models/dueño.model');


//create
dueñoCtrl.createDueño = async ( req, res ) => {
  try {
    const {nombres,apellidos,ci,telefono} = req.body;
    const dueñoSchema = new Dueño({nombres,apellidos,ci,telefono});
    const newDueño = await dueñoSchema.save();
    if(!newDueño){
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

module.exports = dueñoCtrl;