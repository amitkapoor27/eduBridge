import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  trainerName: { type: String, required: true },
});

const Course = model('Course', courseSchema);

export default Course;
