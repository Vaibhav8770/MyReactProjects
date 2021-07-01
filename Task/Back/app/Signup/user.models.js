module.exports = (mongoose)=>{
    let schema = mongoose.Schema({
        name: String,
        username: String,
        email: String,
        password:String,
        cpassword:String,
    })
    let User = mongoose.model('user',schema);
    return User;
}