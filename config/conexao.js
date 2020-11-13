const mongoose = require('mongoose')
const uri = "mongodb://localhost:27017/APNP"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})

module.exports = mongoose
