const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Allows Cross Region handles
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader("Access-Control-Allow-Methods", 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
  next();
})

// Will parse requests to json data :-)
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// brings in Role model so we can create a three quick roles in the server when loading 
const db = require("./models");
const Role = db.role;

function initial() {
  Role.create({
    id: 1,
    name: "admin"
  });
 
  Role.create({
    id: 2,
    name: "pmo"
  });
 
  Role.create({
    id: 3,
    name: "pm"
  });
};
// Creating the Roles 
initial();

db.sequelize.sync();

// Routes that Frontend may hit
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/employee.routes')(app);
require('./routes/pm.routes')(app);
require('./routes/asset.routes')(app);
require('./routes/contract.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

