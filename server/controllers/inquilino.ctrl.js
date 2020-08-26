const inquilinoCtrl = {};
const Inquilino = require('../models/inquilino.model');

//render inquilino view
inquilinoCtrl.renderInquilinoView = async (req , res) => {
  const inquilino = await Inquilino.find({});
  res.render('inquilino/gestionInquilino', {inquilino});
}
//create
inquilinoCtrl.createInquilino = async ( req, res ) => {
  try {
    const {nombres,apellidos,ci,telefono} = req.body;
    const inquilinoSchema = new Inquilino({nombres,apellidos,ci,telefono});
    const newInquilino = await inquilinoSchema.save();
    if(!newInquilino){
      req.flash('error_msg', 'Error al crear el registro');
      return res.redirect('/inquilino');
    }else{
      req.flash('success_msg', 'Creado Exitosamente!');
      res.redirect('/inquilino');
    }

    
  } catch (error) {
    req.flash('error_msg', 'Error al crear el registro');
    return res.redirect('/inquilino');
    
  }
}


//read

//update

//delete

module.exports = inquilinoCtrl;