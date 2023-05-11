// Design an algorithm to encode a list of strings to a string. 
// The encoded string is then sent over the network and is decoded back to the original list of strings.

// Please implement encode and decode

function encode(strs) {
  return strs.join(":;") + ":;";
}

function decode(str) {
  return str.split(":;").slice(0, -1);
}

const originalStrs = ["lint", "code", "love", "you"];

const encodedStr = encode(originalStrs);
console.log(encodedStr); // "lint:;code:;love:;you:;"

const decodedStrs = decode(encodedStr);
console.log(decodedStrs); // ["lint", "code", "love", "you"]



