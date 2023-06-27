const express = require("express");

const router = express.Router();

module.exports = ( { speakersService } ) => {

  router.get("/", async (req, res) => {
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
  });

  router.get("/:shortname", async (req, res) => {
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
  });

  return router;
}
