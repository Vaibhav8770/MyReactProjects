const express=require('express')
const app=express()
const port=8585

app.get('/',(req,res)=>{
    res.send('Hello Node Express')
})

app.listen(port,()=>{
    console.log(`Server started on port: ${port}`);  
})
