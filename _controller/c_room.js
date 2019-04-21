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
    if(req.body.name){
      m_room.create(
        {name: req.body.name, description: req.body.description})
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
    if(req.body.id && req.body.name){
      m_room.update(        
        {name: req.body.name, description: req.body.description}
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
      m_room.destroy({where: {id: req.body.id }})
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

module.exports = room
