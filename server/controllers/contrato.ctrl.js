const contratoCtrl = {};

const Dueño = require('../models/dueño.model');
const Inquilino = require('../models/inquilino.model');
const Puesto = require('../models/puesto.model');
const Administrador = require('../models/administrador.model');
const Contrato = require('../models/contrato.model');

//render dueño view
contratoCtrl.renderContratoView = async (req , res) => {
  
  const duenos = await Dueño.find({});
  const inquilinos = await Inquilino.find({});
  const puestos = await Puesto.find({});
  const admin = await Administrador.find({});
  const contrato = await Contrato.find({})
  .populate('idDueno','nombres')
  .populate('idInquilino','nombres')
  .populate('idPuesto','numero')
  .exec();

  
  res.render('contrato/gestionContrato', {contrato,duenos,inquilinos,puestos,admin});
}

//create
contratoCtrl.createContrato = async ( req, res ) => {


  try {
    const {tipoContrato,idDueno,idInquilino,idPuesto,cuotaMensual,multa,admin} = req.body;
    
    
    var arregloObjAdmin = [];
    admin.forEach(e => {
      var objAdmin = {
        idAdministrador:e
      }
      arregloObjAdmin.push(objAdmin);
    });
    var contratoSchema;
    if(idInquilino == ""){
       contratoSchema = new Contrato({tipoContrato,idDueno,idPuesto,cuotaMensual,multa,administradores:arregloObjAdmin});
    }else{
      contratoSchema = new Contrato({tipoContrato,idDueno,idInquilino,idPuesto,cuotaMensual,multa,administradores:arregloObjAdmin});
    }

    const newContrato = await contratoSchema.save();

    if(!newContrato){
      req.flash('error_msg', 'Error al crear el registro');
      return res.redirect('/contrato');
    }else{

      var objContratos = { idContrato: newContrato._id }
      const puestoActualizao = await Puesto.update(
        { _id: idPuesto }, 
        { $push: { contratos: objContratos } }
      )
      
      if(!puestoActualizao){
        req.flash('error_msg', 'No se puedo registrar el contrato en el puesto');
        return res.redirect('/contrato');
      }else{
        req.flash('success_msg', 'Creado Exitosamente!');
        res.redirect('/contrato');
      }

    }
  } catch (error) {
    req.flash('error_msg', 'Error al crear el registro servidor');
    return res.redirect('/contrato');
  }
  
}

//read

//update

//delete

module.exports = contratoCtrl;