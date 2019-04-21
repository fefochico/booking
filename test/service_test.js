const assert = require('chai').assert;
const supertest = require("supertest");

var request = supertest.agent("http://localhost:3000");
var id= null;

describe("Service unit test",function(){
  describe("Add service test",function(){
    it("should return message",function(done){
      request
      .post("/service/new")
      .send({"name": "service_test", "description": "service_test_description", "unit": 3})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        id = res.body.id;
        assert.isNumber(res.body.id);
        done(err);
      });
    });
  });

  describe("Add service test",function(){
    it("should return message",function(done){
      request
      .post("/service/new")
        .send({"description": "service_test_description", "unit": 4})
        .expect(404) // THis is HTTP response
        .end(function(err,res){
          done(err);
      });
    });
  });

  describe("Get service test",function(){
    it("should return message",function(done){
      // calling home page api
      request
      .get("/service/all")
      //.set('Authorization', 'Bearer ' + token)
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.isNumber(res.body[0].id);
        done(err);
      });
    });
  });

  describe("Edit service test",function(){
    it("should return message",function(done){
      request
      .post("/service/edit")
      .send({"id": id,"name": "service_test", "description": "service_test_description", "unit": 4})
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        assert.equal(res.body.affectedRows, 1);
        done(err);
      });
    });
  });

  describe("Edit service test",function(){
    it("should return message",function(done){
      request
      .post("/service/edit")
      .send({"name": "service_test", "description3": "service_test_description3", "unit": 4})
      .expect(404) // THis is HTTP response
      .end(function(err,res){
        done(err);
      });
    });
  });

  describe("Delete service test",function(){
    it("should return message",function(done){
      request
      .post("/service/delete")
      .send({"id": id})
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
      .send({})
      .expect(404) // THis is HTTP response
      .end(function(err,res){
        done(err);
      });
    });
  });

});