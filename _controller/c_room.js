var m_room = require('../_model/m_room');

var room = {
  getAll: function(req, res, next){
    m_room.findAll()
    .then(result =>{
      res.send(result);
    })
    .catch(() =>{
      res.status(400).send({error: 'internal error'});
    })
  },
  insert: function(req, res, next){
    m_room.create(
        {name: req.body.name, description: req.body.description})
    .then(result =>{
      res.send({id: result.id});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  },
  edit: function(req, res, next){
    m_room.update(        
      {name: req.body.name, description: req.body.description}
    , {where: { id: req.body.id }})
    .then(()=>{
      res.send({affectedRows: affectedRows});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  },
  delete: function(req, res, next){
    m_room.destroy({where: {id: req.body.id }})
    .then(affectedRows =>{
      res.send({affectedRows: affectedRows});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  }
}

module.exports = room
