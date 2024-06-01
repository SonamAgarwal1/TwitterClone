import express from "express";
const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
