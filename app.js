const express = require("express");
const dotenv =  require("dotenv");
const GetFileRouter = require("./routes/UploadFileRouter");

const app = express();
dotenv.config();

app.use("/api", GetFileRouter);

const server = app.listen(process.env.PORT, ()=>{
    console.log("listening....");
})

module.exports = server;
