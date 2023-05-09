// Design an algorithm to encode a list of strings to a string. 
// The encoded string is then sent over the network and is decoded back to the original list of strings.

// Please implement encode and decode
function encode(lists){
    let str = "";
    for(const i in lists){
        str = str + lists[i] + lists[i].length.toString()+":";
    }
    console.log(str);
}

// function encode(strList) {
//     const encoded = strList.map(str => str.length.toString() + ":" + str).join("");
//     console.log(encoded);
//   }

function decode(str) {
    const decoded = []; // Initialize an empty array to hold the decoded strings
    let i = 0; // Initialize a variable to keep track of the current index in the input string
  
    // Loop over the input string until the end is reached
    while (i < str.length) {
      // Find the index of the next colon ":" in the input string
      let colonIndex = str.indexOf(":", i);
  
      // Parse the length of the next string from the input string
      // by extracting the substring from the current index to the colonIndex
      // and converting it to an integer using parseInt
      let length = parseInt(str.slice(i, colonIndex));
  
      // Calculate the start and end indices of the next string in the input string
      // by adding 1 to the colonIndex to skip over the colon separator
      // and adding the length to the start index
      let start = colonIndex + 1;
      let end = start + length;
  
      // Extract the next string from the input string using the start and end indices
      // and push it to the decoded array
      decoded.push(str.slice(start, end));
  
      // Update the current index to the end of the current string
      // to continue decoding the next string in the input string
      i = end;
    }
  
    // Return the decoded array of strings
    return decoded;
  }
  


let lists = ["lint","code","love","you"];
console.log(encode(lists));


