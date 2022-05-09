//Import of Mongoose and call Schema from it
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Import of Mongoose Unique Validator, to ensure unique emails for users
const uniqueValidator = require("mongoose-unique-validator");

//Schema properties definition
let userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    hero: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

//Definning the message to show if the email is already in use
userSchema.plugin(uniqueValidator, { message: "Email already in use." });

//Cretion of the model using the Schema and export
module.exports = mongoose.model("User", userSchema);
