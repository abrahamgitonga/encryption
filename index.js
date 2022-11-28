const express = require("express");
require("dotenv").config();
const router = require("./Routes/routes");

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/user", router)

const port = process.env.PORT || 4040;


app.listen(port, ()=>console.log(`Running on port: ${port}`))