const SignUpDetails = require('./index');

const User = SignUpDetails.users;
// let FilePath = ""

// const multer = require('multer');
// const fileUpload = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, './Images');
//     },
//     filename: (req, file, callback) => {
//         callback(null, file.originalname);
//     },
// })
// const upload = multer({ storage: fileUpload })

// app.post('/single', upload.single('Image'), (req,res)=>{
//     console.log(req.file.path);
//     res.send("file uploaded")
// })


exports.create = (req,res)=>{
    console.log(req.body);
    const user = new User({
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cpassword:req.body.cpassword,
    });

    user.save(user)
        .then((data)=>{
            res.send(data)
        })
}