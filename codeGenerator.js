function generateShortCode(length = 5) {
  let result = "";
  let hasOneHash = false;
  // lowercase, uppercase, numbers , - 
  for (var i = 0; i < length; i++) {
    const spectrum = hasOneHash ? 3 : 4;
    let random = Math.floor(Math.random() * spectrum);

    if (random == 0) {
      result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    } else if (random == 1) {
      result += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    } else if (random == 2) {
      result += Math.floor(Math.random() * 10);
    } else {
      result += "-";
      hasOneHash = true;
    }
  }
  return result;
}

module.exports = {
  generateShortCode
}
