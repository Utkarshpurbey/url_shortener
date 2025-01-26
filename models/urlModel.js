const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    shortId:{
        type:String,
        required:true,
        unquiue:true
    },
    visitDetails: [
      {
        timeStamp: {
          type: Date,
        },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model('url',urlSchema);

module.exports = URL;