import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import {connect}  from 'mongoose';

const app = express();
dotenv.config();
// enabling cors for all requests by using cors middleware
app.use(cors());
// Enable pre-flight
app.options("*",cors());

// Connect to the database
connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Parse JSON request bodies
app.use(express.json());

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

export default app ;