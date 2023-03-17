import { Router } from 'express';
const router = Router();
import Trainer  from '../models/trainer.js';
import jwt from 'jsonwebtoken';

// Get all trainers
router.get('/',authenticateToken, async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single trainer
router.get('/:id',authenticateToken, getTrainer, (req, res) => {
  console.log(res.trainer);
  res.json(res.trainer);
});

// Create a trainer
router.post('/',authenticateToken, async (req, res) => {
  const trainer = new Trainer({
    name: req.body.name,
    email: req.body.email,
    expertise: req.body.expertise,
  });

  try {
    const newTrainer = await trainer.save();
    res.status(201).json(newTrainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a trainer
router.patch('/:id',authenticateToken, getTrainer, async (req, res) => {
  if (req.body.name != null) {
    res.trainer.name = req.body.name;
  }

  if (req.body.email != null) {
    res.trainer.email = req.body.email;
  }

  if (req.body.expertise != null) {
    res.trainer.expertise = req.body.expertise;
  }

  try {
    const updatedTrainer = await res.trainer.save();
    res.json(updatedTrainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a trainer
router.delete('/:id',authenticateToken,  async (req, res) => {
  try {
    await Trainer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Trainer deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single trainer by ID
async function getTrainer(req, res, next) {
    let trainer;
    try {
      trainer = await Trainer.findById(req.params.id);
      console.log(trainer);
      if (!trainer) {
        return res.status(404).json({ message: 'Trainer not found' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.trainer = trainer;
    next();
}
// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}
export default router;