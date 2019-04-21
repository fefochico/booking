const assert = require('chai').assert;
const supertest = require("supertest");

var request = supertest.agent("http://localhost:3000");
var id= null;

describe("Room unit test",function(){
  describe("Add room test",function(){
    it("should return message",function(done){
      request
      .post("/room/new")
      .send({"name": "cabina_test", "description": "cabina_test_description"})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        id = res.body.id;
        assert.isNumber(res.body.id);
        done(err);
      });
    });
  });

  describe("Add room test",function(){
    it("should return message",function(done){
      request
      .post("/room/new")
        .send({"description": "cabina_test_description"})
        .expect(404) // THis is HTTP response
        .end(function(err,res){
          done(err);
      });
    });
  });

  describe("Get room test",function(){
    it("should return message",function(done){
      // calling home page api
      request
      .get("/room/all")
      //.set('Authorization', 'Bearer ' + token)
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.isNumber(res.body[0].id);
        done(err);
      });
    });
  });

  describe("Edit room test",function(){
    it("should return message",function(done){
      request
      .post("/room/edit")
      .send({"id": id,"name": "cabina_test2", "description": "cabina_test_description2"})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.equal(res.body.affectedRows, 1);
        done(err);
      });
    });
  });

  describe("Edit room test",function(){
    it("should return message",function(done){
      request
      .post("/room/edit")
      .send({"name": "cabina_test2", "description": "cabina_test_description2"})
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
      .send({"id": id})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.equal(res.body.affectedRows, 1)
        done(err);
      });
    });
  });

  describe("Delete room test",function(){
    it("should return message",function(done){
      request
      .post("/room/delete")
      .send({})
      .expect(404) // THis is HTTP response
      .end(function(err,res){
        done(err);
      });
    });
  });

});