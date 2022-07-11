// am creat o globala pentru npm express
const express = require('express');


const calculatorApp = express();

calculatorApp.use(express.urlencoded({extented: true}));
calculatorApp.get("/",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
calculatorApp.post("/bmiCalculator.html",function(req,res){
    // am adaugat "number" caci altfel nu citeste numere
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight / (height * height);

    res.send(String("the result is " + bmi));
});
calculatorApp.listen(3000,function(){
    console.log("server started on port 3000");
});