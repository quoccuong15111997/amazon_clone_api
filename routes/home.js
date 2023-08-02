const express = require("express");

const homeRouter = express.Router();

homeRouter.get("/home", async (req, res) => {
  res.json({mes:"Home"});
});

module.exports = homeRouter;