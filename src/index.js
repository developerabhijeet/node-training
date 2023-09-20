
const express = require("express");
const PORT = 3001;
const app = express();

app.get("/", (req, res) => {
  res.send("Get Started! :)");
});

app.get('/test', function(req, res) {
    res.sendFile(__dirname + "/test.html")
});

app.get("/user/:name", (req, res) => {
  res.json(`Hi ${req.params.name }`);
});

app.listen(PORT, () => 
    console.log(`app is running on this port ${PORT}`)
);
