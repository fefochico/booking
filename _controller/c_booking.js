var m_booking = require('../_model/m_booking');

var booking = {
  getAll: function(req, res, next){
    m_booking.findAll()
    .then(result =>{
      res.send(result);
    })
    .catch(() =>{
      res.status(400).send({error: 'internal error'});
    })
  },
  insert: function(req, res, next){
    m_booking.create(
        {idstarttime: req.body.idstarttime, idservice: req.body.idservice, idroom: req.body.idroom, clientname: req.body.name, clientsurname: req.body.apellidos, clienttelephone: req.body.telephone, clientemail: req.body.email})
    .then(result =>{
      res.send({id: result.id});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  },
  edit: function(req, res, next){
    m_booking.update(        
      {idstarttime: req.body.idstarttime, idservice: req.body.idservice, idroom: req.body.idroom, clientname: req.body.name, clientsurname: req.body.apellidos, clienttelephone: req.body.telephone, clientemail: req.body.email}
    , {where: { id: req.body.id }})
    .then(()=>{
      res.send({affectedRows: affectedRows});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  },
  delete: function(req, res, next){
    m_booking.destroy({where: {id: req.body.id }})
    .then(affectedRows =>{
      res.send({affectedRows: affectedRows});
    })
    .catch(() =>{
      res.status(400).send({error: 'Internal error'});
    })
  }
}

module.exports = booking
