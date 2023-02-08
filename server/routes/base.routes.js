const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({message: "All good in here"});
});

module.exports = router;
