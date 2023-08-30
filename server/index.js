const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/configVar');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    if (process.env.NODE_ENV === 'development') {
      console.log(`connecting to ${config.MONGODB_URI}`);
    }
    const conn = await mongoose.connect(config.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('error connecting to MongoDB:', error.message);
  }
};
connectDB().then(() => {
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
});
