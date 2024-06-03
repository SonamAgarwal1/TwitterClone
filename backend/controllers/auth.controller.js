export const signup = async (req, res) => {
  res.json({ data: "Hit the sign up URL" });
};

export const login = async (req, res) => {
  res.json({ data: "Hit the login page" });
};

export const logout = async (req, res) =>
  res.json({ data: "Hit the logout button" });
