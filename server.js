const express=require("express");
const connectDB=require("./config/db.js");
const app=express();
const path=require("path");
connectDB();
app.use(express.json({extended:false}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin,X-auth-token, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api/users",require("./routes/users"));
app.use("/api/auth",require("./routes/auth"));
app.use("/api/contacts",require("./routes/contact"));

if(process.env.NODE_ENV==="production")
{
  app.use(express.static("client/build"));
  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,"client","build","index.html")));
}
const port=process.env.PORT || 2000;
app.listen(port,()=>{
	console.log("server started")
})