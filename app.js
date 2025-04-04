const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Docker!");
});

//Health check route
app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
