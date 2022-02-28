const mongoose = require('mongoose');

// const CONNECTION_STRING = process.env.CONNECTION_STRING;
const CONNECTION_STRING = "mongodb+srv://LiorYosef:LiorYosef12@office-db.aqaye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(()=> console.log('MongoDB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose.connection;