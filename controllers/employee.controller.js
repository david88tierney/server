const db = require("../models");
const Employee = db.employees;
const Contract = db.contracts;


const Op = db.Sequelize.Op;


// Create and Save a new Employee
exports.create = (req, res) => {

    // Make sure Employee at least has a first name can add more if wanted
    if (!req.body.first_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    } 
    // Model of req.body model of employee
    const employee = {
    status: req.body.status,
    prefix: req.body.prefix,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    suffix: req.body.suffix,
    title: req.body.title,
    ssn: req.body.ssn,
    dob : req.body.dob,
    address : req.body.address,
    home_phone : req.body.home_phone,
    work_phone : req.body.work_phone,
    mobile_phone : req.body.mobile_phone,
    clearance: req.body.clearance,
    clearance_date: req.body.clearance_date,
    clearance_exp_date: req.body.clearance_exp_date,
    vacation_accrual_base_date : req.body.vacation_accrual_base_date,
    position: req.body.position,
    hire_date: req.body.hire_date,
    termination_date: req.body.termination_date,
    salary: req.body.salary,
    last_pay_change: req.body.last_pay_change,
    email: req.body.email,
    rssi_email: req.body.rssi_email,
    gov_email: req.body.gov_email,
    pm: req.body.pm,
    remarks: req.body.remarks,
    race: req.body.race,
    gender: req.body.gender,
    flsa: req.body.flsa,
    work_status: req.body.work_status,
    contract: req.body.contract
    };
  
    Employee.create(employee)
      .then(employee => {
        if(req.body.contract){
          Contract.findAll({
            where: {
              short_name: {
                [Op.or]: [req.body.contract]
              }
            }
          }).then(contracts => {
            employee.setContracts(contracts).then(() => {
              res.send({message: "Employee was created!", contracts})
            });
          });
        }
        else{ 
          res.send(employee)
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Employee."
        });
      });
  };

// Retrieve all Employees from the database.
// exports.findAll = (req, res) => {
//     // const first_name = req.query.first_name;
//     // var condition = first_name ? { first_name: { [Op.like]: `%${first_name}%` } } : null;
  
//     Employee.findAll()
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving employees."
//         });
//       });
//   };

exports.findAll = (req, res) => {
    Employee.findAll({
    include: [
      {
        model: Contract,
        as: "contracts"
      }
    ]
  })
    .then((employees) => {
      console.log(employees);
      res.send(employees);
    })
    .catch((err) => {
      console.log(">> Error while retrieving employees: ", err);
    });
};

exports.findBothEmployeeAndContract = (req, res) => {

    Employee.findAll()
      .then ( data => {
        console.log(data);
      })

  
}
  

// Find a single Employee with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Employee.findByPk(id, {
    include: [
      {
        model: Contract,
        as: "contracts"
      }
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Employee with id=" + id
      });
    });
};

// Update a Employee by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Employee.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Employee with id=${id}. Maybe Employee was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id
      });
    });
};

exports.bindEmployeeToContract = ( req, res ) => {
  const data = 1;

  Contract.findByPk(data)
  .then(data => {
    console.log(data, 'should give me the smpt ')
  });
}

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Employee.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id
      });
    });
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
    Employee.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Employees were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };

// Find all published Employees
exports.findAllPublished = (req, res) => {
  
};
