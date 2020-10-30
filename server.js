const express = require ('express');
 
const app = express();
 
var PORT = process.env.PORT || 5000;

app.use(express.json());
//app.use(longger);

/*function longger(req,res,next){
    console.log(`Route : ${req.protocol}://${req.get('host')} ${req.originalUrl}`)
    next();
}*/

//GET
app.get("/", (req,res) =>{
    res.send("You are on the homepage");
})

//POST
app.post("/user", (req,res) =>{
    var nm=req.body;
    res.send("Welcome "+ nm.nombre);
})
 
//PUT//ruta dinamicas
app.put("/user/:userId", (req,res) =>{
    res.send(`Task ${req.params.userId } has been updated`);
    console.log(req.body);
    console.log(req.params);
})
 
//DELETE
app.delete("/delete", (req,res) =>{
    res.json({delete:true});
})


 
app.listen(PORT, () =>{
    console.log("Server on port: " + PORT);
})