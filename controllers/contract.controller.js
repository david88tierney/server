const db = require("../models");
const Contract = db.contracts;
const Employee = db.employees;
const Op = db.Sequelize.Op;

// Create and Save a new Contract
exports.create = (req, res) => {
    // Make sure req has a name for the contract
    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
  
    // Create a Contract from req.body
    const contract = {
      status: req.body.status,
      name: req.body.name,
      short_name: req.body.short_name,
      contract_vehicle: req.body.contract_vehicle,
      number: req.body.number,
      POP_begin: req.body.POP_begin,
      POP_end: req.body.POP_end,
      point_of_contact: req.body.point_of_contact,
      poc_phone: req.body.poc_phone,
      poc_email: req.body.poc_email,
      alternate_point_of_contact: req.body.alternate_point_of_contact,
      alternate_poc_phone: req.body.alternate_poc_phone,
      alternate_poc_email: req.body.alternate_poc_email,
      contract_type: req.body.contract_type,
      sub_or_prime: req.body.sub_or_prime,
      ceiling_value: req.body.ceiling_value,
      notes: req.body.notes
    };
    // Save Contract in the database
    Contract.create(contract)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Contract."
        });
      });
  };

// Retrieve all Contracts from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Contract.findAll({
      include: [
        { 
          model: Employee,
          as: "employees"
        }
      ]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Contracts."
        });
      });
  };

// Find a single Contract with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Contract.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Contract with id=" + id
      });
    });
};

// Update a Contract by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Contract.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Contract was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Contract with id=${id}. Maybe Contract was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Contract with id=" + id
      });
    });
};

// Delete a Contract with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Contract.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Contract was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Contract with id=${id}. Maybe Contract was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Contract with id=" + id
      });
    });
};

// Delete all Contracts from the database.
exports.deleteAll = (req, res) => {
    Contract.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Contract were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };

