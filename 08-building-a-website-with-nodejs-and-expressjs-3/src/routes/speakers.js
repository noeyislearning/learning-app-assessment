const express = require("express");

const router = express.Router();

module.exports = ( { speakersService } ) => {

  router.get("/", async (req, res, next) => {
    try {
      const speakers = await speakersService.getList();
      const artwork = await speakersService.getAllArtwork();
      res.render(
        "layout",
        {
          pageTitle: "Speakers",
          template: "speakers",
          speakers,
          artwork
        }
      )
    } 
    catch(err) {
      return next(err);
    }
  });

  router.get("/:shortname", async (req, res, next) => {
    try {
      const speaker = await speakersService.getSpeaker(req.params.shortname);
      const artwork = await speakersService.getArtworkForSpeaker(req.params.shortname);
      res.render(
        "layout",
        {
          pageTitle: "Speakers",
          template: "speaker-detail",
          speaker,
          artwork
        }
      )
    }
    catch(err) {
      return next(err);
    }
  });

  return router;
}
