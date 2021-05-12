const express = require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");

const homestart = "test test test test test test test test test test test test test test test test test test";
const aboutcontent = "test test testtest test test";
const contactcontent = "test test testtest test testtest test test";

const app=express();

var title;
var postbody;

var posts=[];

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req,res){
res.render("home", { 
    homecont : homestart,
    posta : posts

}
);


});

app.get("/about", function(req,res){
    res.render("about", {abouttext : aboutcontent }); 
});

app.get("/contact" , function(req,res){
    res.render("contact", {contacttext : contactcontent })
});

app.get("/compose" , function(req,res){
    res.render("compose");
});

app.post("/compose", function(req,res){
    var posttext = req.body.txtpost;
    var posttitle=req.body.txttitle;

    var obj = {
        title:posttitle,
        postbody : posttext
    };
    posts.push(obj);

    res.redirect("/");
})

app.listen(3000, function(){
console.log("Server is running on port 3000");

})
