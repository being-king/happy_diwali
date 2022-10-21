const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");

const app=express();

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/:customName",function(req,res){
    const text=req.params.customName;
    const url="https://killer-abhi.github.io/diwali/"+req.params.customName;
    const name=text.replaceAll('-',' ');
    res.render("main",{sender:name,link:url,display1:"flex",display2:"none"});

})
app.get("/",function(req,res){
    const url="https://killer-abhi.github.io/diwali/"+"Killer_Abhi";
    res.render("main",{sender:"Deepak Prajapati",link:url,display1:"flex",display2:"none"});
})
app.post("/",function(req,res){
    const name=req.body.name;
    let url="https://killer-abhi.github.io/diwali/"+name.replaceAll(' ','-');
    res.render("main",{sender:name,link:url,display1:"none",display2:"flex"});
})
app.listen(3000,function(err){
    if(!err){
        console.log("Server Started at Port 3000");
    }
    else{
        console.log(err);
    }
})



