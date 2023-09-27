const express = require("express");
const PORT = 3000;
const app = express();
app.get("/test", (req, res) => {
  res.send("Hello all");
});
console.log("__dirname", __dirname, process.cwd());
app.get("/user/:name", (req, res) => {
  res.json({ hello: req.params.name });
});

app.listen(PORT, () => console.log(`app is running on this port ${PORT}`));
