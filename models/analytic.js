const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
   {
    totalVisits:{
        type:Number,
        default:0
    },
    lastVisted: {
        type:Date,
    },
    visitedDetails:[
        {
            timeStamp:{
                type:Date,
            }
        }
    ]
   },
   {timeStamp: true}
)

const Analytics = mongoose.model('analytics',analyticsSchema);

module.exports = Analytics;