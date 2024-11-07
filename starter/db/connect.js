const mongoose = require('mongoose')

const connectionString =
  'mongodb+srv://vlad:1234@nodeexpressproject.exzkp.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProject'

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('CONNECTED TO THE DB...'))
  .catch((err) => console.log(err))
