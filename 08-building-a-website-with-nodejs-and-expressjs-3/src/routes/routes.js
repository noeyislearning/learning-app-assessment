const express = require("express");

const router = express.Router();

const feedbackRoute = require("./feedback");
const speakerRoute = require("./speakers");

module.exports = (feedbackService, speakersService) => {

  router.get("/", async (req, res, next) => {

    if(!req.session.visitcount) {
      req.session.visitcount = 0;
    }

    req.session.visitcount += 1;

    console.log(`Session ID: ${req.session.id}, Visit Count: ${req.session.visitcount}`);

    try {
      const topSpeakers = await speakersService.getList();
      const artwork = await speakersService.getAllArtwork();

      res.render(
        "layout/index",
        { 
          pageTitle: 'Welcome',
          template: "index",
          topSpeakers,
          artwork
        },
      )
    } 
    catch(err) {
      return next(err);
    }
  });

  // pass the services as an object
  router.use("/feedback", feedbackRoute({ feedbackService }));
  router.use("/speakers", speakerRoute({ speakersService }));

  return router;
}
