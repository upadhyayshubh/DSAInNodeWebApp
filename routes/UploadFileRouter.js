const Router = require("express").Router();


Router.get("/getfile", async (req, res)=>{
    try{
        res.send("correct file");
    }catch(e){
        console.log(e);
        res.send("wrong file");
    }
});
module.exports= Router;