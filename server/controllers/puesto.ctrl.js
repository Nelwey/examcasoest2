const puestoCtrl = {};
const Puesto = require('../models/puesto.model');


//create
puestoCtrl.createPuesto = async ( req, res ) => {
  try {
    const {numero,sector,gremio,estado} = req.body;
    const puestoSchema = new Puesto({numero,sector,gremio,estado});
    const newPuesto = await puestoSchema.save();
    if(!newPuesto){
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