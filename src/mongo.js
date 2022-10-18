require('dotenv').config()
const { default: mongoose } = require('mongoose')

const connectToMongoDB = async () => {
  await mongoose.connect(process.env.MONGO_URL)
}

const disconnectToMongoDB = async () => {
  await mongoose.disconnect()
}

module.exports = { connectToMongoDB, disconnectToMongoDB }
