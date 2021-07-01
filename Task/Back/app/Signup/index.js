const SignUpURL = require('./db.config')
const mongoose = require('mongoose')

const SignUpDetails = {};
SignUpDetails.mongoose = mongoose;
SignUpDetails.url = SignUpURL.url;
SignUpDetails.users = require('./user.models')(mongoose);
module.exports = SignUpDetails;

