const { createHash } = require("node:crypto");

function hash(input) {
  // returns 256 bit diggest
  return createHash("sha256").update(input).digest("base64");
}

let password = "Hello";

// always return same value
const hash1 = hash(password);

const hash2 = hash(password);

console.log(hash1 === hash2);
