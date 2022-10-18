const { default: mongoose } = require('mongoose')

const connectToMongoDB = async () => {
  await mongoose.connect('mongodb+srv://akshat21:aku1985pika@cluster0.ew0oz.mongodb.net/kmart?retryWrites=true&w=majority')
}

const disconnectToMongoDB = async () => {
  await mongoose.disconnect()
}

module.exports = { connectToMongoDB, disconnectToMongoDB }
