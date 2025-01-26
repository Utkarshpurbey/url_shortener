const { generateShortCode } = require("../codeGenerator");
const URL = require("../models/urlModel");
const Analytics = require('../models/analytic')
const handleGenerateUrl = async (req, res) => {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ message: "url is required" });
  }
  const shortId = generateShortCode();
  await URL.create({
    url: body.url,
    shortId: shortId,
    vistDetails: [],
  });
  return res.status(201).json({
    shortId,
  });
};

const handleRedirectUrl = async (req, res) => {
  const shortId = req.params.shortId;
  if (!shortId) {
    return res.status(400).json({ message: "shortId is required" });
  }
  const fetchFromDb = await URL.findOneAndUpdate(
    { shortId: shortId },
    {
      $push: {
        visitDetails: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  res.redirect(fetchFromDb.url);
};

const handleReturnAnalytcs = async(req,res)=>{
    const shortId = req.params.shortId;
    if(!shortId){
        return res.status(400).json({message:"shortId is required"});
    }
    const Element = await URL.findOne({shortId:shortId});
    if(!Element){
        return res.status(404).json({message:`No Url found for ${shortId}`})
    }
    const visitDetails = Element?.visitDetails;
    const totalVisits = visitDetails.length;
    const lastVisited = visitDetails[totalVisits-1].timeStamp;
    res.status(200).json({
        totalVisits,
        lastVisited,
        visitDetails
    })

}


module.exports = {
  handleGenerateUrl,
  handleRedirectUrl,
  handleReturnAnalytcs
};
