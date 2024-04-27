module.exports = (app) => {
var router = require("express").Router();
const employee = require("../controllers/employee.controller");

router.get("/", employee.findAllEmployee);
router.post("/create-employee", employee.insertEmployee);

app.use("/api/employee", router);
};