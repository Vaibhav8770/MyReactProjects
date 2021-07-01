module.exports = (mongoose) => {
    let schema = mongoose.Schema({
        tasktitle: String,
        taskdetails: String,
    })
    let Task = mongoose.model('task', schema);
    return Task;
}