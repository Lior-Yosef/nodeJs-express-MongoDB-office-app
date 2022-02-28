require('dotenv').config();
require('./DB')
const express = require('express');
const cors = require('cors');
const OfficeRoutes = require('./routes/Office-routes.js');
const app = express();
const port = process.env.PORT || 3005;
// const port =3005;


app.use(express.json());
app.use("/office",OfficeRoutes);
app.use(cors());
app.get("/", (req, res) => {
    res.send({ massage: "server connected" })
});

app.listen(port,()=>{
    console.log("lissiom");
})