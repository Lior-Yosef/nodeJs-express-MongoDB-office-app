require('dotenv').config();
require('./DB')
const express = require('express');
const cors = require('cors');
const OfficeRoutes = require('./routes/Office-routes.js');
const UserRouter = require('./routes/user-routes.js');
const passport = require("passport"); // ייבוא של מודל הפספורט

const app = express();
const port = process.env.PORT || 3005;
// const port =3005;


app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());



require('./config/passport')(passport); // ייבוא של הפונקציה מתיקית קונפיג והעברה בתור ארגומנט את מודל הפספורט
app.use(passport.initialize()) // איתחול של פונקציית הפספורט ומעכשיו הוא בהאזנה כלומר בודק את הטוקן

app.use("/office", passport.authenticate('jwt', { session: false }), OfficeRoutes); //  זו פונקציה שיודעת לאמת את הטוקן -authenticate
app.use("/User", UserRouter);
app.get("/", (req, res) => {
    res.send({ massage: "server connected" })
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}