const TaskURL = require('./db.config')
const mongoose = require('mongoose')


const TaskDetails = {};
TaskDetails.mongoose = mongoose;
TaskDetails.url = TaskURL.url;
TaskDetails.tasks = require('./Todo.model')(mongoose);
module.exports = TaskDetails;
