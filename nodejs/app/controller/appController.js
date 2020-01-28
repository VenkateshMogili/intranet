"use strict";

var Task = require("../model/appModel.js");

// show list of all task
exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {
    if (err) res.send(err);
    console.log("res", task);
    res.send(task);
  });
};

// creates new task
exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);

  // handles null error
  if (!new_task.task || !new_task.status) {
    res
      .status(400)
      .send({ error: true, message: "Please provide task/status" });
  } else {
    Task.createTask(new_task, function(err) {
      if (err) res.send(err);
      else {
        res.send("New Task Added Succesfully");
      }
    });
  }
};

// read a particular task
exports.read_a_task = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

// update a particular task
exports.update_a_task = function(req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

//delete a particular task
exports.delete_a_task = function(req, res) {
  Task.remove(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    res.json({ message: "Task successfully deleted" });
  });
};

// throw error for an invalid route
exports.error = function(req, res) {
  res.send("*INVALID ROUTE*");
};
