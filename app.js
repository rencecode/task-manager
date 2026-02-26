const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Task Manager API");
});

app.get("/tasks", (req, res) => {
  res.json([
    { id: 1, task: "Learn Git" },
    { id: 2, task: "Learn Docker" }
  ]);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});