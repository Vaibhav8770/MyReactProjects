// import Express
const express = require('express');

// import cross Origin resource sharing
const cors = require('cors');

const port = 8282;

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));

// parse all content in the form of json
app.use(express.json());

const SignUpDetails = require('./app/Signup/index');

SignUpDetails.mongoose
    .connect(SignUpDetails.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    console.log(SignUpDetails.url))
    .then(() => {
        console.log("database connected!!!");
    })
    
    require('./app/Signup/user.routes')(app);


// const TaskDetails = require('./app/AddToDo/index')

//     TaskDetails.mongoose
//     .connect(TaskDetails.url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     },
//     console.log(TaskDetails.url))
//     .then(() => {
//         console.log("database connected!!!");
//     })
    
//     require('./app/AddToDo/ToDo.routes')(app);
    
    app.listen(port, () => {
        console.log(`this app is running on ${port}`);
    })

