"use strict";
module.exports = function(app) {
  var task = require("../controller/appController");
  var employee = require("../controller/employeeController");

  app.route("/").get(task.list_all_tasks);

  // add new employee || by default lists all employees.
  app
    .route("/employees")
    .get(employee.list_all_employees)
    .post(employee.create_an_employee);

  // read, update or delete any particular employee based on ID.
  app
    .route("/employees/:employeeId")
    .get(employee.read_an_employee)
    .put(employee.update_an_employee)
    .delete(employee.delete_an_employee);

  // add new task || by default lists all tasks.
  app
    .route("/tasks")
    .get(task.list_all_tasks)
    .post(task.create_a_task);

  // read, update or delete any particular task based on ID.
  app
    .route("/tasks/:taskId")
    .get(task.read_a_task)
    .put(task.update_a_task)
    .delete(task.delete_a_task);

  app.route("/*").get(task.error);
};
