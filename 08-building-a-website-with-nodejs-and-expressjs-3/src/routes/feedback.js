const express = require("express");

const router = express.Router();

module.exports = ( { feedbackService } ) => {
  router.get("/", async (req, res) => {
    const feedback = await feedbackService.getList();
    return res.json(feedback);
  });

  router.post("/", (req, res) => {
    return res.send(`Feedback form posted.`)
  });

  return router;
}