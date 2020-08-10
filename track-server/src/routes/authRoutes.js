const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const User = mongoose.model('User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = new User({email, password});
    await user.save();
    const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
    res.send({token});
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) return res.status(422).send({
    error: 'You must provide email and password!',
  });

  try {
    const user = await User.findOne({email});
    if (!user) {
      console.log('sign-in User not found');
      return res.status(404).send({
        error: 'Invalid email or password!',
      });
    }

    await user.comparePassword(password);
    const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
    res.send({token});
  } catch (err) {
    console.log('sign-in error: ', err);
    return res.status(404).send({
      error: 'Invalid email or password!',
    });
  }
});

module.exports = router;
