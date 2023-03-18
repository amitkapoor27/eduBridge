import express from 'express';
import dotenv from 'dotenv';

import jsonPkg  from 'body-parser';
import {connect}  from 'mongoose';
const {json} = jsonPkg;
const app = express();
dotenv.config();

// Connect to the database
connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Parse JSON request bodies
app.use(json());

// Import the routes for each microservice
import authRoutes from './routes/auth.js';
import trainerRoutes from './routes/trainers.js';
import courseRoutes from './routes/courses.js';

// Use the routes for each microservice
app.use('/auth', authRoutes);
app.use('/trainers', trainerRoutes);
app.use('/courses', courseRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

export { app };