const express = require("express");
require("dotenv").config();
const router = require("./Routes/routes");

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/user", router)
//port 4040 is the alternative port

const port = process.env.PORT || 4040;


app.listen(port, ()=>console.log(`Running on port: ${port}`))
