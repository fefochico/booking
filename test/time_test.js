const assert = require('chai').assert;
const supertest = require("supertest");

var request = supertest.agent("http://localhost:3000");
var id= null;

describe("Time unit test",function(){
  describe("Add time test",function(){
    it("should return message",function(done){
      request
      .post("/time/new")
      .send({"nametime": "9:00", "description": "hola"})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        id=res.body.id;
        assert.isNumber(res.body.id);
        done(err);
      });
    });
  });

  describe("Add time test",function(){
    it("should return message",function(done){
      request
      .post("/time/new")
        .send({"description": "hola"})
        .expect(404) // THis is HTTP response
        .end(function(err,res){
          done(err);
      });
    });
  });

  describe("Get time test",function(){
    it("should return message",function(done){
      // calling home page api
      request
      .get("/time/all")
      //.set('Authorization', 'Bearer ' + token)
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.isNumber(res.body[0].id);
        done(err);
      });
    });
  });

  describe("Edit time test",function(){
    it("should return message",function(done){
      request
      .post("/time/edit")
      .send({"id": id,"nametime": "21:00", "description": "hola"})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.equal(res.body.affectedRows, 1);
        done(err);
      });
    });
  });

  describe("Edit time test",function(){
    it("should return message",function(done){
      request
      .post("/time/edit")
      .send({"nametime": "21:00", "description": "hola"})
      .expect(404) // THis is HTTP response
      .end(function(err,res){
        done(err);
      });
    });
  });

  describe("Delete time test",function(){
    it("should return message",function(done){
      request
      .post("/time/delete")
      .send({"id": id})
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
      .send({})
      .expect(404) // THis is HTTP response
      .end(function(err,res){
        done(err);
      });
    });
  });

});