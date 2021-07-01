module.exports = (app) => {
    const tasks = require('./Todo.controller');

    var router = require('express').Router();

    router.get('/getAll', tasks.getAll)
    router.get('/get/:query', tasks.get)
    router.post("/create", tasks.create)
    
    router.delete('/delete/:query', tasks.delete)
    router.put('/update/:query', tasks.updateTask)

    app.use("/api/tasks", router)
}