const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let obj = [
    {
      title: "lorem title 1",
      description: "notes description",
      tag: "general",
    },
    {
      title: "lorem title 2",
      description: "notes description",
      tag: "general",
    },
  ];
  res.json(obj);
});

module.exports = router;
