const assert = require('chai').assert;
const supertest = require("supertest");

var request = supertest.agent("http://localhost:3000");
var idroom= null;
var idservice= null;
var idtime= null;
var id=null;

describe("Booking unit test",function(){
  describe("Add room test",function(){
    it("should return message",function(done){
      request
      .post("/room/new")
      .send({"name": "cabina_test", "description": "cabina_test_description"})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        idroom = res.body.id;
        assert.isNumber(res.body.id);
        done(err);
      });
    });
  });

  describe("Add service test",function(){
    it("should return message",function(done){
      request
      .post("/service/new")
      .send({"name": "service_test", "description": "service_test_description", "unit": 3})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        idservice = res.body.id;
        assert.isNumber(res.body.id);
        done(err);
      });
    });
  });

  describe("Add time test",function(){
    it("should return message",function(done){
      request
      .post("/time/new")
      .send({"nametime": "9:00", "description": "hola"})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        idtime=res.body.id;
        assert.isNumber(res.body.id);
        done(err);
      });
    });
  });


  describe("Add booking test",function(){
    it("should return message",function(done){
      request
      .post("/booking/new")
      .send({"idstarttime": idtime, "idservice": idservice, "idroom": idroom,
              "date": "2019-04-10",
              "clientname": "cliente_test", "clientsurname": "cliente_test", 
              "clienttelephone": "123456789", "clientmail": "aaa@aaa.com"})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        id = res.body.id;
        assert.isNumber(res.body.id);
        done(err);
      });
    });
  });

  describe("Add booking test",function(){
    it("should return message",function(done){
      request
      .post("/booking/new")
      .send({"idservice": idservice, "idroom": idroom,
        "clientname": "cliente_test", "clientsurname": "cliente_test", 
        "clienttelephone": "123456789", "clientmail": "aaa@aaa.com"})
      .expect(404) // THis is HTTP response
      .end(function(err,res){
          done(err);
      });
    });
  });

  describe("Get booking test",function(){
    it("should return message",function(done){
      // calling home page api
      request
      .get("/booking/all/2019-04-09/2019-04-11")
      //.set('Authorization', 'Bearer ' + token)
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.isNumber(res.body[0].id);
        done(err);
      });
    });
  });

  describe("Edit booking test",function(){
    it("should return message",function(done){
      request
      .post("/booking/edit")
      .send({"id": id, "idstarttime": idtime, "idservice": idservice, "idroom": idroom,
              "date": "2019-04-10",
              "clientname": "cliente_test2", "clientsurname": "cliente_test2", 
              "clienttelephone": "123456780", "clientmail": "aaa@aaa.com"})  
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.equal(res.body.affectedRows, 1);
        done(err);
      });
    });
  });

  describe("Edit booking test",function(){
    it("should return message",function(done){
      request
      .post("/booking/edit")
      .send({"idstarttime": idtime, "idservice": idservice, "idroom": idroom,
              "date": "2019-04-10",
              "clientname": "cliente_test2", "clientsurname": "cliente_test2", 
              "clienttelephone": "123456782", "clientmail": "aaa@aaa.com"})
      .expect(404) // THis is HTTP response
      .end(function(err,res){
        done(err);
      });
    });
  });

  describe("Delete booking test",function(){
    it("should return message",function(done){
      request
      .post("/booking/delete")
      .send({"id": id})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.equal(res.body.affectedRows, 1)
        done(err);
      });
    });
  });

  describe("Delete booking test",function(){
    it("should return message",function(done){
      request
      .post("/booking/delete")
      .send({})
      .expect(404) // THis is HTTP response
      .end(function(err,res){
        done(err);
      });
    });
  });

  describe("Delete room test",function(){
    it("should return message",function(done){
      request
      .post("/room/delete")
      .send({"id": idroom})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.equal(res.body.affectedRows, 1)
        done(err);
      });
    });
  });

  describe("Delete service test",function(){
    it("should return message",function(done){
      request
      .post("/service/delete")
      .send({"id": idservice})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.equal(res.body.affectedRows, 1)
        done(err);
      });
    });
  });

  describe("Delete time test",function(){
    it("should return message",function(done){
      request
      .post("/time/delete")
      .send({"id": idtime})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.equal(res.body.affectedRows, 1)
        done(err);
      });
    });
  });
});