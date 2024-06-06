const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.post("/", TaskController.createTask)
routes.put("/:id")

module.exports = routes;
