const express=require("express");
const cors=require("cors");
const helmet=require("helmet");
const userRoutes=require("./routes/userRoutes");

const app=express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/",(req,res)=>res.send("PaySync backend running"));

app.use("/api/users",userRoutes);

module.exports=app;