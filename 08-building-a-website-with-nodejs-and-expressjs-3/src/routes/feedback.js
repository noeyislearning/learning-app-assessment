const express = require("express");

const router = express.Router();

module.exports = ( { feedbackService } ) => {
  
    router.get("/", async (req, res, next) => {
      try {
        const feedback = await feedbackService.getList();
        res.render(
          "layout",
          {
            pageTitle: "Feedback",
            template: "feedback",
            feedback
          }
        )
      }
      catch(err) {
        return next(err);
      }
    });

  router.post("/", (req, res) => {
    console.log(req.body)
    return res.send(`Feedback form posted.`)
  });

  return router;
}