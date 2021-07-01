module.exports = (app)=>{
    const users = require('./user.controller');
    
    var router = require('express').Router();

    router.post("/create",users.create)

    app.use("/api/users",router)
}