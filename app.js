const express = require("express");
const dotenv =  require("dotenv");
const GetFileRouter = require("./routes/UploadFileRouter");
const {testAccountBalanceType} = require("./controller/JS/AccountBalanceType");

const app = express();
dotenv.config();

app.use("/api", GetFileRouter);

testAccountBalanceType();

const server = app.listen(process.env.PORT, ()=>{
    console.log("listening....");
})

module.exports = server;
