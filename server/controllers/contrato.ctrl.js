const contratoCtrl = {};
const Contrato = require('../models/contrato.model');


//create
contratoCtrl.createContrato = async ( req, res ) => {


  try {
    const {tipoContrato,idDueno,idInquilino,idPuesto,cuotaMensual,multa,administradores} = req.body;
    
    var arregloObjAdmin = [];
    administradores.forEach(e => {
      var objAdmin = {
        idAdministrador:e
      }
      arregloObjAdmin.push(objAdmin);
    });
    
    const contratoSchema = new Contrato({tipoContrato,idDueño:idDueno,idInquilino,idPuesto,cuotaMensual,multa,administradores:arregloObjAdmin});
    const newContrato = await contratoSchema.save();
    if(!newContrato){
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
      message: "Error Inesperado" 
    });
    
  }
}


//read

//update

//delete

module.exports = contratoCtrl;