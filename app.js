require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productRouter = require('./routes/products');

//Middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//Middleware
app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.send('<h1>Store Api</h1><a href="/api/v1/products">Products Route</a>');
});

app.use('/api/v1/products', productRouter);

//Proudct Routes

app.use(notFoundMiddleware);
app.use(errorMiddleware);
const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening at port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
