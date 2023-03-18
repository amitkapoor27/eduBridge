import { Router } from 'express';
import Course from '../models/Course.js';
import authenticateToken from '../middleware/verify.middleware.js';

const router = Router();

// Create a new course
router.post('/',authenticateToken, async (req, res) => {
  try {
    const course = new Course({
      title: req.body.title,
      description: req.body.description,
      trainerName: req.body.trainerName,
    });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all courses
router.get('/', authenticateToken,async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific course by ID
router.get('/:id',authenticateToken, getCourse, (req, res) => {
  res.json(res.course);
});

// Update a course
router.patch('/:id',authenticateToken, getCourse, async (req, res) => {
  if (req.body.title != null) {
    res.course.title = req.body.title;
  }
  if (req.body.description != null) {
    res.course.description = req.body.description;
  }
  if (req.body.trainerName != null) {
    res.course.trainerName = req.body.trainerName;
  }
  try {
    const updatedCourse = await res.course.save();
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a course
router.delete('/:id',authenticateToken,  async (req, res) => {
  try {
   await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a specific course by ID
async function getCourse(req, res, next) {
  let course="";
  try {
     course = await Course.findById(req.params.id);
    if (course == null) {
      return res.status(404).json({ message: 'Cannot find course' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.course = course;
  next();
}


export default router;