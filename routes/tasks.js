// routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create a new task
router.post('/add', (req, res) => {
  const { title, description, done, name } = req.body;
  const newTask = new Task({ title, description, done,name });

  newTask
    .save()
    .then(() => res.json('Task added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Retrieve all tasks
router.get('/', (req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update a task by ID
router.put('/update/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json('Task deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/data', async(req, res)=>{
    const {page = 1, limit = 10} = req.query;

    try {
        const data = await Task.find()
        .skip((page -1) * limit)
        .limit(limit)
        .exec();

        const totalCount = await Task.countDocuments();

        res.json({
            data,
            totalPages : Math.ceil(totalCount / limit),
            currrentPage : +page,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Srever error'});
    }
})

module.exports = router;