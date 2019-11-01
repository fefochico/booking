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
    if(req.body.nametime){
      m_time.create(
        {nametime: req.body.nametime, description: req.body.description})
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
    if(req.body.id && req.body.nametime){
      m_time.update(        
        {nametime: req.body.nametime, description: req.body.description}
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
      m_time.destroy({where: {id: req.body.id }})
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

module.exports = time