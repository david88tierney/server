module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      prefix: {
        type: Sequelize.STRING,
        allowNull: true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      suffix: {
        type: Sequelize.STRING,
        allowNull: true
      },  
      ssn: {
        type: Sequelize.STRING,
        allowNull: true
      },
      dob: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // can create address model one employee many address
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // can create phone model one employee many phones
      mobile_phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      work_phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      home_phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      //May need to associate it with Contract model

      clearance: {
        type: Sequelize.STRING,
        allowNull: true
      },
      clearance_date: {
        type: Sequelize.STRING,
        allowNull: true
      },
      clearance_exp_date: {
        type: Sequelize.STRING,
        allowNull: true

      },
      vacation_accrual_base_date : {
        type: Sequelize.STRING,
        allowNull: true
      },
      position: {
        type: Sequelize.STRING,
        allowNull: true
      },
      hire_date: {
        type: Sequelize.STRING,
        allowNull: true
      },
      termination_date: {
        type: Sequelize.STRING,
        allowNull: true
      },
      salary: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      last_pay_change: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Create new model for email.  one employee many emails
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      rssi_email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      gov_email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pm: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      remarks: {
        type: Sequelize.STRING,
        allowNull: true
      },
  
      race: {
        type: Sequelize.STRING,
        allowNull: true
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true
      },
      flsa: {
        type: Sequelize.STRING,
        allowNull: true
      },
      //FULL OR PART TIME
      work_status: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  
    return Employee;
  };