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
    if(req.body.name && req.body.unit){
      m_service.create(
        {name: req.body.name, description: req.body.description, unit: req.body.unit})
      .then(result =>{
        res.send({id: result.id});
      })
      .catch(() =>{
        res.status(400).send({error: 'Internal error'});
      })
    }else{
      res.status(404).send({error: 'It is necesary more parameters'});
    }
  },
  edit: function(req, res, next){
    if(req.body.id && req.body.name && req.body.unit){
      m_service.update(        
        {name: req.body.name, description: req.body.description, unit: req.body.unit}
        , {where: { id: req.body.id }})
      .then(result=>{
        res.send({affectedRows: result[0]});
      })
      .catch(() =>{
        res.status(400).send({error: 'Internal error'});
     })
    }else{
      res.status(404).send({error: 'It is necesary more parameters'});
    }
  },
  delete: function(req, res, next){
    if(req.body.id){
      m_service.destroy({where: {id: req.body.id }})
      .then(result =>{
        res.send({affectedRows: result});
      })
      .catch(() =>{
        res.status(400).send({error: 'Internal error'});
      })
    }else{
      res.status(404).send({error: 'It is necesary more parameters'});
    }
  }
}

module.exports = service