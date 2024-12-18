const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log('CONNECTED TO THE DB...'))
    .catch((err) => console.log(err))
}

module.exports = connectDB
