import { Router } from 'express';
import  Jwt  from 'jsonwebtoken';
import pkg from 'bcryptjs';
import User from '../models/User.js';
const { compare, genSalt, hash } = pkg;
const router = Router();

// Authenticate user and generate JWT
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const isMatch = await compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = Jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Register new user and generate JWT
router.post('/register', async (req, res) => {
  try {
    const salt = await genSalt();
    const hashedPassword = await hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    //console.log(process.env.JWT_SECRET);
    const token = Jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
