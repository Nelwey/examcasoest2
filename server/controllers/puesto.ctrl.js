const puestoCtrl = {};
const Puesto = require('../models/puesto.model');

//render puestos view
puestoCtrl.renderPuestoView = async (req , res) => {
  const puestos = await Puesto.find({});
  res.render('puesto/gestionPuesto', {puestos});
}

//create
puestoCtrl.createPuesto = async ( req, res ) => {
  try {
    const {numero,sector,gremio,estado} = req.body;
    const puestoSchema = new Puesto({numero,sector,gremio,estado});
    const newPuesto = await puestoSchema.save();
    if(!newPuesto){
      req.flash('error_msg', 'Error al crear el registro');
      return res.redirect('/puesto');
    }else{
      req.flash('success_msg', 'Creado Exitosamente!');
      res.redirect('/puesto');
    }

    
  } catch (error) {

    req.flash('error_msg', 'Error al crear el registro');
    return res.redirect('/puesto');
    
  }
}


//read

//update

//delete

module.exports = puestoCtrl;