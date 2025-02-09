const User = require("../models/user-model");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const { username, email, phone, password, role } = req.body; // Destructure all required fields

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      username, // Save username
      email,
      phone,
      password: hashedPassword,
      role: role || "Other", // Set default role to "Other"
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
