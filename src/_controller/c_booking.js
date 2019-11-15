var m_booking = require('../_model/m_booking');

var booking = {
  getAll: function(req, res, next){
    m_booking.getDataBookingBetweenDates(req, res, next)
    .then(result =>{
      res.send(result);
    })
    .catch(
      err =>{
      res.status(400).send({error: err});
    })
  },
  insert: function(req, res, next){
    if(req.body.idstarttime && req.body.idservice && req.body.idroom &&  req.body.date && req.body.clientname && req.body.clientsurname){
      m_booking.create(
        {idstarttime: req.body.idstarttime, idservice: req.body.idservice, idroom: req.body.idroom, date: req.body.date, clientname: req.body.clientname, clientsurname: req.body.clientsurname, clienttelephone: req.body.clienttelephone, clientmail: req.body.clientmail})
      .then(result =>{
        res.send({id: result.id});
      })
      .catch((error) =>{
        res.status(400).send(error);
      })
    }else{
      res.status(404).send({error: 'It is necesary more parameters'});
    }
  },
  edit: function(req, res, next){
    if(req.body.id && req.body.idstarttime && req.body.idservice && req.body.idroom &&  req.body.date && req.body.clientname && req.body.clientsurname){
      m_booking.update(  
        {idstarttime: req.body.idstarttime, idservice: req.body.idservice, idroom: req.body.idroom, date: req.body.date, clientname: req.body.clientname, clientsurname: req.body.clientsurname, clienttelephone: req.body.clienttelephone, clientmail: req.body.clientmail},
        {where: { id: req.body.id }})
      .then((result)=>{
        res.send({affectedRows: result[0]});
      })
      .catch((err) =>{
        res.status(400).send({error: 'Internal error'});
      })
    }else{
      res.status(404).send({error: 'It is necesary more parameters'});
    }
  },
  delete: function(req, res, next){
    if(req.body.id){
      m_booking.destroy({where: {id: req.body.id }})
      .then(affectedRows =>{
        res.send({affectedRows: affectedRows});
      })
      .catch(() =>{
        res.status(400).send({error: 'Internal error'});
      })
    }else{
      res.status(404).send({error: 'It is necesary more parameters'});
    }
  }
}

module.exports = booking
