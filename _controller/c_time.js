var m_time = require('../_model/m_time');

var time = {
  getAll: function(req, res, next){
    m_time.findAll()
    .then(result =>{
      res.send(result);
    })
    .catch(() =>{
      res.status(400).send({error: 'internal error'});
    })
  },
  insert: function(req, res, next){
    m_time.create(
        {nametime: req.body.nametime, description: req.body.starttime})
    .then(result =>{
      res.send({id: result.id});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  },
  edit: function(req, res, next){
    m_time.update(        
        {nametime: req.body.nametime, description: req.body.description}
        , {where: { id: req.body.id }})
    .then(()=>{
      res.send({affectedRows: affectedRows});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  },
  delete: function(req, res, next){
    m_time.destroy({where: {id: req.body.id }})
    .then(affectedRows =>{
      res.send({affectedRows: affectedRows});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  }
}

module.exports = time