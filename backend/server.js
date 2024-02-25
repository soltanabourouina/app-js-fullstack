const express =require("express");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv").config();
const port = 5000;
//connection à la DB
connectDB();
const app = express();

//Middleware qui permet de traiter la donnée de request
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/post", require("./routes/post.routes.js"));
//lancer le serveur
app.listen(port, ()=> console.log("le serveur à démarré au port "+ port));