const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const accountSchema = new Schema({
  username: String,
  password: String
});

accountSchema.plugin(passportLocalMongoose);

// We export the Schema to avoice attaching the model to the default mongoose connection.
module.exports = mongoose.model("Account", accountSchema);
