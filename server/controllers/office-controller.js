const employees = require('../models/Employee_model');

const GetAllEmployee = async (req, res) => {
    await employees.find((err, result) => {
        if (err) return res.status(404).send({ massage: err });
        res.send(result);
    }).clone();
};

const GetEmployeeByID = async (req, res) => {
    await employees.findById()
    .then((result)=> res.send(result))
    .catch(err => res.status(404).send({massage:err}));
};

const AddEmployee = async (req, res) => {
    await employees.create(req.body)
    .then((result)=> res.send(result))
    .catch(err => res.status(404).send({massage:err}));
};
const UpdateEmployee = async (req, res) => {
    await employees.findByIdAndUpdate(req.params.id,req.body)
    .then((result)=> res.send(result))
    .catch(err => res.status(404).send({massage:err}));
};

const DeleteEmployee = async (req, res) => {
    await employees.findByIdAndDelete(req.params.id)
    .then((result)=> res.send(result))
    .catch(err => res.status(404).send({massage:err}));
};

module.exports={GetAllEmployee,GetEmployeeByID,AddEmployee,UpdateEmployee,DeleteEmployee}