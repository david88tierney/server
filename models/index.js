const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.ROLES = ["admin", "pmo", "pm"];

db.assets = require("./asset.model.js")(sequelize, Sequelize);
db.employees = require("./employee.model.js")(sequelize, Sequelize);
db.contracts = require("./contract.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.contracts.belongsToMany(db.employees, {
  through: "contracts_employees",
  foreignKey: "contractId",
  otherKey: "employeesId"
});

db.employees.belongsToMany(db.contracts, {
  through:"contracts_employees",
  foreignKey: "employeesId",
  otherKey: "contractId"
});

db.employees.hasMany(db.assets, { as : "assets"});
db.assets.belongsTo(db.employees, {
  foreignKey: "employeesId",
  as: "employee"
});

module.exports = db;