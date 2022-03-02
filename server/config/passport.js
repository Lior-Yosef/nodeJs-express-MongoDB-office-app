// ייבוא ראשון זה איך לפענח את המידע (Strategy)
// ייבוא שני זה לחלץ את המידע (ExtractJwt)

const jwt_Strategy = require('passport-jwt').Strategy;
const jwt_ExtractJwt = require('passport-jwt').ExtractJwt;
const users = require('../models/User_model');
const SECRET_KEY = process.env.SECRET_KEY;

const options = {
    secretOrKey: SECRET_KEY
}; 
options.jwtFromRequest = jwt_ExtractJwt.fromAuthHeaderAsBearerToken(); // פונקציה שהולכת לבקשה ומוציאה את הטוקן 

module.exports = (passport) => {
    passport.use(
        new jwt_Strategy(options, (jwt_payload, done) => { // פרמטר שני בקולבק הוא האובייקט של המשתמש אחרי זה יש לנו את פונקציית הדאן 
            users.findOne({ _id: jwt_payload._id })
                .then(user => {
                    if (user) done(null, user);
                    done(null, false);
                })
                .catch(err => done(err, false));
        })
    )       
}
