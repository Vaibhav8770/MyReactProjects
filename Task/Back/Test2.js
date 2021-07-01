// import Express
const express = require('express');

// import cross Origin resource sharing
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const port = 8282;

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));

// parse all content in the form of json
app.use(express.json());

const SignUpDetails = require('./app/Signup/index');
const TaskDetails = require('./app/AddToDo/index');

// SignUpDetails.mongoose
//     .connect(SignUpDetails.url, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
//     },
//     console.log(SignUpDetails.url))
//     .then(() => {
//         console.log("database connected!!!");
//     })

// require('./app/Signup/user.routes')(app);



// file upload

const multer = require('multer');
const fileUpload = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './Images');
    },
    filename: (req, file, callback) => {
        callback(null, uuidv4() + file.originalname);
    },
})

const upload = multer({ storage: fileUpload })
app.post('/single', upload.single('Image'), (req,res)=>{
    console.log(req.file.path);
    res.send("file uploaded")
})




// connection

TaskDetails.mongoose
    .connect(TaskDetails.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
        // console.log(TaskDetails.url)
    )
    .then(() => {
        console.log("database connected!!!");
    })

require('./app/AddToDo/ToDo.routes')(app);

app.listen(port, () => {
    console.log(`this app is running on ${port}`);
})

