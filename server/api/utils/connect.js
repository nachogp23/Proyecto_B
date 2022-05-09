//Require dotenv to acces all environment variables
require("dotenv").config();

//Require Mongoose to connect with DB
const mongoose = require("mongoose");

//Save DB URL
const mongoDB = process.env.MONGO_DB_URL;

//Configure connect function
const connect = async () => {
    try {
        const db = await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const {name, host} = db.connection;
        console.log(`Connecting with DB: ${name}, in host: ${host}`);
    } catch (error) {
        console.log("Error in the conexion with DB", error);
    }
};

//Export the connect function
module.exports = {connect};
