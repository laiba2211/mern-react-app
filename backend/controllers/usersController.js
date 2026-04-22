const User = require('../models/users');

// GET all users
const getAllusers = async (req, res) => {
  try {
    const allusers = await User.find(); // ✅ finds → find
    res.status(200).json(allusers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// GET user by ID
const getAllusersByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // ✅ correct method
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// CREATE user
const createusers = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// REPLACE user (PUT)
const replaceusers = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true, overwrite: true } // ✅ fix
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // ✅ return res
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// UPDATE user (PATCH)
const updateusers = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // ✅ fix
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// DELETE user
const deleteusers = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id); // ✅ correct method

    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // ✅ fix
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllusers,
  getAllusersByID,
  createusers,
  replaceusers,
  updateusers,
  deleteusers,
};