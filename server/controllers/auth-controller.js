const User = require("../models/user-model");
const bcrypt = require("bcrypt");

// Signup handler
exports.signup = async (req, res) => {
  try {
    const { username, email, phone, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      username,
      email,
      phone,
      password: hashedPassword,
      role: role || "Other",
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login handler
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare the password with the stored hash
    const match = await bcrypt.compare(password, existingUser.password);
    if (!match) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Successfully logged in
    res.status(200).json({ message: "Login successful", user: existingUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
