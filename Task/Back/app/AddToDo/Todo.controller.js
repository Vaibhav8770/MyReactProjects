const dbConfig = require('./db.config');
const TaskDetails = require('./index');

const Task = TaskDetails.tasks;

exports.create = (req, res) => {
    console.log(req.body);
    const task = new Task({
        tasktitle: req.body.tasktitle,
        taskdetails: req.body.taskdetails,
    });

    task.save(task)
        .then((data) => {
            res.send(data)
        })
}

exports.getAll = (req, res) => {
    Task.find()
        .then((data) => {
            res.send(data)
        })
}

exports.get = (req, res) => {
    const query = req.params.query;
    Task.findById(query)
    // ({ $text: { $search: query } })
        .then((data) => {
            res.json(data)
        })

}

exports.updateTask = (req, res) => {
    const query = req.params.query;
    console.log(query);
    console.log(req.body);
    const { tasktitle, taskdetails } = req.body
    Task.findByIdAndUpdate( query , { tasktitle, taskdetails })
        .then((data) => {
            res.json(data);
        })
}
    // Task.findByIdAndUpdate( query , req.body, {new:true, select:"tasktitle taskdetails"})
    //     .then((data) => {
    //         res.json(data);
    //     })
// }

exports.delete = (req,res) => {
    const query = req.params.query;
    Task.findByIdAndDelete(query)
        .then((data) => {
            res.json(data);
        })
}

