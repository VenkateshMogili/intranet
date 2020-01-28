"user strict";
var sql = require("./db.js");

//Task object constructor
var Employee = function(employee) {
  this.first_name = employee.first_name;
  this.last_name = employee.last_name;
  this.email = employee.email;
  this.password = employee.password;
  this.phone_no = employee.phone_no;
  this.emergency_no = employee.emergency_no;
  this.location = employee.location;
  this.current_address = employee.current_address;
  this.blood_group = employee.blood_group;
  this.resume_url = employee.resume_url;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// list all employees
Employee.getAllEmployees = function(result) {
  sql.query("select * from employees", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};

// create a new employee
Employee.createEmployee = function(newEmployee, result) {
  sql.query("insert into employees set ?", newEmployee, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

// read a particular employee
Employee.getEmployeeById = function(employeeId, result) {
  sql.query("select * from employees where id = ? ", employeeId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};


// update a particular employee
Employee.updateById = function(employeeId, employee, result) {
  sql.query("update employees set ? where id = ?", [employee, employeeId], function(err,res) {
    if (err) {
      console.log("error: ", err);
      result(err,null);
    } else {
      result(null, res);
    }
  });
};

// delete a particular employee
Employee.remove = function(employeeId, result) {
  sql.query("update employees set status='inactive' where id = ?", [employeeId], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Employee;
