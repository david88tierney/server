const db = require("../models");
const Employee = db.employees;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
        // What a PM can view on Employee
        // const employee = {
        //     first_name: req.body.first_name,
        //     last_name: req.body.last_name,
        //     contract: req.body.contract,
        //     title: req.body.title
        //   };

    Employee.findAll()
          .then( data =>{
              res.send(data);
              console.log('got here', data)
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving employees."
            });
          });
};