const { generateShortCode } = require("../codeGenerator");
const URL = require("../models/urlModel");
const handleGenerateUrl = async (req, res) => {
  const body = req.body;
  let response = {};

  if (!body.url) {
    return res.status(400).json({ message: "url is required" });
  }
  const shortId = generateShortCode();
  await URL.create({
    url: body.url,
    shortId: shortId,
    vistDetails: [],
  })
  return (response = res.status(201).json({
    shortId,
  }));
};
const handleRedirectUrl =  async (req, res) => {
    const shortId = req.params.shortId;
    if (!shortId) {
        return res.status(400).json({ message: 'shortId is required' });
    }
    const fetchFromDb = await URL.findOneAndUpdate({shortId:shortId},{
        $push:{
            visitDetails:{
                timeStamp:Date.now()
            }
        }
    });
    res.redirect(fetchFromDb.url);
    
}

// function

module.exports = {
  handleGenerateUrl,
  handleRedirectUrl
};
