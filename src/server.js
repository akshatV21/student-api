const app = require('./app');
const { connectToMongoDB } = require('./mongo');

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  await connectToMongoDB();
  app.listen(PORT, () => console.log(`Listening to requests on port: ${PORT}`));
};

startServer();
