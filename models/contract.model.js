module.exports = (sequelize, Sequelize) => {
    const Contract = sequelize.define("contract", {
      status: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      short_name: {
        type: Sequelize.STRING,
        unique: true
      },
      contract_vehicle: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      POP_begin: {
        type: Sequelize.STRING
      },
      POP_end: {
        type: Sequelize.STRING
      },
      point_of_contact: {
        type: Sequelize.STRING
      },
      poc_phone: {
          type: Sequelize.STRING
      },
      poc_email: {
        type: Sequelize.STRING
      },
      alternate_point_of_contact: {
        type: Sequelize.STRING
      },
// IF THEY DECIDE WE NEED TO STORE PHONE NUMBER AND EMAIL FOR ALTERNATE POC
      alternate_poc_phone: {
        type: Sequelize.STRING
      },
      alternate_poc_email: {
        type: Sequelize.STRING
      },
      contract_type: {
        type: Sequelize.STRING
      },
      sub_or_prime: {
        type: Sequelize.STRING
      },
      ceiling_value: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
      }
    });
  
    return Contract;
  };