"use strict";

var Employee = require("../model/employeeModel.js");

// show list of all task
exports.list_all_employees = function(req, res) {
  Employee.getAllEmployees(function(err, employee) {
    if (err) res.send(err);
    console.log("res", employee);
    res.send(employee);
  });
};

// creates new task
exports.create_an_employee = function(req, res) {
  var new_employee = new Employee(req.body);

  // handles null error
  if (!new_employee.email || !new_employee.password) {
    res
      .status(400)
      .send({ error: true, message: "Please provide Email/Password" });
  } else {
    Employee.createEmployee(new_employee, function(err) {
      if (err) res.send(err);
      else {
        res.json({success:true,message:"New Employee Added Succesfully"});
      }
    });
  }
};

// read a particular employee
exports.read_an_employee = function(req, res) {
  Employee.getEmployeeById(req.params.employeeId, function(err, employee) {
    if (err) res.send(err);
    res.json(employee);
  });
};

// update a particular employee
exports.update_an_employee = function(req, res) {
  Employee.updateById(req.params.employeeId, new Employee(req.body), function(err, employee) {
    if (err) res.send(err);
    res.json({"success": true,"message": "Employee successfully updated"});
  });
};


//delete a particular employee
exports.delete_an_employee = function(req, res) {
  Employee.remove(req.params.employeeId, function(err, employee) {
    if (err) res.send(err);
    res.json({success:true, message: "Employee successfully deleted" });
  });
};

// throw error for an invalid route
exports.error = function(req, res) {
  res.send("*INVALID ROUTE*");
};
