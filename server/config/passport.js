// תפקידו של הפספורט הוא לבדוק אם הטוקן בתוקף במידה 
// וכן כל הפעולות בשרת היו אפשריות במידה ולא בתוקף הוא חוסם את הגישה לשרת

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
            console.log(jwt_payload);
            users.findById( jwt_payload.User._id)
                .then(user => {
                    if (user) return done(null, user);
                    done(null, false);
                })
                .catch(err => console.log(err));
        })
    )       
}
