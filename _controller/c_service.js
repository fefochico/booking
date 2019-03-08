var m_service = require('../_model/m_service');

var service = {
  getAll: function(req, res, next){
    m_service.findAll()
    .then(result =>{
      res.send(result);
    })
    .catch(() =>{
      res.status(400).send({error: 'internal error'});
    })
  },
  insert: function(req, res, next){
    m_service.create(
        {name: req.body.name, description: req.body.description, unit: req.body.unit})
    .then(result =>{
      res.send({id: result.id});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  },
  edit: function(req, res, next){
    m_service.update(        
      {name: req.body.name, description: req.body.description, unit: req.body.unit}
    , {where: { id: req.body.id }})
    .then(()=>{
      res.send({affectedRows: affectedRows});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  },
  delete: function(req, res, next){
    m_service.destroy({where: {id: req.body.id }})
    .then(affectedRows =>{
      res.send({affectedRows: affectedRows});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  }
}

module.exports = service