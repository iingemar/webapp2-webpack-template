var content = require("./content.js");
var otherContent = require("./otherContent.js");

document.write(content + otherContent);

// Test underscore plugin
console.log(_.first([5, 4, 3, 2, 1]));