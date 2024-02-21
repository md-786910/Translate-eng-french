const express = require("express");
const translatte = require("translatte");
const cors = require("cors");

// Intialize App
const app = express();

const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// config cors
app.use(
  cors({
    origin: true,
  })
);

// API routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Express application");
});
app.post("/api/v1/translate", async (req, res) => {
  try {
    const text = req.body.text;
    const engToFrenchTranslate = await translatte(text, { to: "french" });
    res.status(200).json({
      message: "successfully translated",
      result: engToFrenchTranslate,
    });
  } catch (error) {
    res.status(404).json({ message: error?.message });
  }
});

// App Listen
app.listen(port, () => {
  console.log("App listening on port " + port);
});
