const router = require("express").Router();

router.post("/register", (req, res) => {
  console.log(req);
  return res.status(200).json({ message: "Hello" });
});

router.post("/login", (req, res) => {
  console.log(req);
  return res.status(200).json({ message: "Hello" });
});

router.get("/current-user", (req, res) => {
  console.log(req);
  return res.status(200).json({ message: "Hello" });
});

router.put("/current-user", (req, res) => {
  console.log(req);
  return res.status(200).json({ message: "Hello" });
});

router.patch("/current-user", (req, res) => {
  console.log(req);
  return res.status(200).json({ message: "Hello" });
});

router.delete("/current-user", (req, res) => {
  console.log(req);
  return res.status(200).json({ message: "Hello" });
});

module.exports = router;
