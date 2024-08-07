import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("1234");
});

app.listen(PORT, () => {
  console.log(`Server start on port: ${PORT}`);
});
