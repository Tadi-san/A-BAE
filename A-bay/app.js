const express = require("express")
const bp = require("body-parser")
 const app = express()
 const ejs = require("ejs")
 app.use(express.static("public"))
//  app.use(bp.json())
 app.use(bp.urlencoded({ extended: true }))
 app.set('view engine', 'ejs')


 app.get("/index.ejs", (req,res)=>{
    res.render("index", {discription:discription})
 })


 app.get("/seller.ejs", (req,res)=>{
    res.render("seller")
 })


app.post("/index.ejs", (req,res)=>{
    var discription = String(req.body.discription)
    // var image_file = req.body.section.form.input[1]
    // console.log(discription)
    res.render("/index.ejs")
})



app.listen(5000,()=>{
    console.log("server is up!")
})