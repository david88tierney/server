module.exports = app => {
    const contracts = require("../controllers/contract.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Contract
    router.post("/", contracts.create);
  
    // Retrieve all contracts
    router.get("/", contracts.findAll);
  
    // Retrieve a single Employee with id
    router.get("/:id", contracts.findOne);
  
    // Update a Employee with id
    router.put("/:id", contracts.update);
  
    // Delete a Employee with id
    router.delete("/:id", contracts.delete);
  
    // Delete all contracts
    router.delete("/", contracts.deleteAll);
  
    app.use('/api/contracts', router);
  };