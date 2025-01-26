const mongoose = require('mongoose');
const PORT = 8081;

function establishConnection(url){
    return mongoose.connect(
        url
    )
}

module.exports = {
  PORT,
  establishConnection
};
