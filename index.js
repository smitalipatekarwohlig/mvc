const express = require("express");
const app = express();

const userRoutes = require("./routes/user");
app.use("/user",userRoutes);

app.listen(3000,()=>{
    console.log("Listen to the port 3000");
})