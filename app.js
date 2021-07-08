const express = require("express");
const GetFileRouter = require("./routes/UploadFileRouter");

const app = express();

app.use("/api", GetFileRouter);

const server = app.listen(5001, ()=>{
    console.log("listening....")
})

module.exports = server;
