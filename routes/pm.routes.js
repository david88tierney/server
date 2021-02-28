module.exports = app => {
    const pm = require("../controllers/pm.controller.js");

    var router = require("express").Router();

        // Retrieve all Employees with ONLY data PM can view
        router.get("/", pm.findAll);

        app.use('api/employees/pm', router)
}