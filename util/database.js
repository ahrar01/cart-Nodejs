const Sequelize = require("sequelize");

//connecting to seqeulize
const db = new Sequelize("sequalize", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

db.authenticate({ alter: true })
  .then(() => console.log("db connected sucessfully"))
  .catch((err) => console.log(err));


module.exports = db;
