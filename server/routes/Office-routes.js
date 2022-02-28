const OfficeRoutes = require('express').Router();
const OfficeController = require("../controllers/office-controller");
const { GetAllEmployee, GetEmployeeByID, AddEmployee, UpdateEmployee, DeleteEmployee} = OfficeController;

OfficeRoutes.get("/",GetAllEmployee);
OfficeRoutes.get("/:id",GetEmployeeByID);
OfficeRoutes.post("/",AddEmployee);
OfficeRoutes.put("/:id",UpdateEmployee);
OfficeRoutes.delete("/:id",DeleteEmployee);

module.exports = OfficeRoutes;