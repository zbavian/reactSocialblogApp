const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");


dotenv.config();
// mongoose.connect(
//     process.env.MONGO_URL,
//     { useNewUrlParser: true, useUnifiedTopology: true},
//     ()=>{
//     console.log("Connected to MONGODB");
//     }
// );

mongoose.connect(process.env.MONGO_URL, {
       useNewUrlParser: true, 
       useUnifiedTopology: true,
       // useCreateIndex: true,
       // useFindAndModify:true,
   })
   .then(console.log("Connected to mongoodb"))
   .catch((err)=>console.log(err));
// middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8800, ()=>{
    console.log("Backend server is running")
});
