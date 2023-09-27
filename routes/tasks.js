// routes/tasks.js
const router = require('express').Router();
const Task = require('../models/Task');

// Create a new task
router.route('/add').post((req, res) => {
  const { title, description, done, name } = req.body;
  const newTask = new Task({ title, description, done,name });

  newTask
    .save()
    .then(() => res.json('Task added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Retrieve all tasks
router.route('/').get((req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update a task by ID
router.route('/update/:id').post((req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      task.title = req.body.title;
      task.description = req.body.description;
      task.done = req.body.done;

      task
        .save()
        .then(() => res.json('Task updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete a task by ID
router.route('/:id').delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json('Task deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;