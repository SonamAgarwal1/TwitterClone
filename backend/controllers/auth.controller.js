export const signup = async (req, res) => {
  const { username, fullName, email, password } = req.body;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: "Username is already taken" });
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return res.status(400).json({ error: "Email is already taken" });
  }
  res.json({
    data: "Hit the sign up URL",
  });
};

export const login = async (req, res) => {
  res.json({ data: "Hit the login page" });
};

export const logout = async (req, res) =>
  res.json({ data: "Hit the logout button" });
