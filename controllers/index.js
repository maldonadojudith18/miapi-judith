const models = require('../database/models');

// post
const createzapato = async (req, res) => {
  try {
    const zapato = await models.zapato.create(req.body);
    return res.status(201).json({
	zapato
    });

  } catch(error) {
    return res.status(500).json({ error: error.message }); 
  }
};

//get
const getAllzapatos = async (req, res) => {
  console.log('getting zapato');
  try {
    const zapatos = await models.zapato.findAll ({
      include: []
    });
    return res.status(200).json({zapatos});

  } catch (error) {
    return res.status(500).send(error.message);
  }
}; 

module.exports = {
  createzapato,
  getAllzapatos
}