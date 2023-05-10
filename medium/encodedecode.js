// Design an algorithm to encode a list of strings to a string. 
// The encoded string is then sent over the network and is decoded back to the original list of strings.

// Please implement encode and decode
function encode(lists){
    let str = "";
    for(let i in lists){
        str = str + lists[i] + lists[i].length.toString()+":";
    }
    
    return str;
}





function decode(str) {
  const result = [];
  let arr = str.split(":")
  console.log("arr",arr)
  return result;
}


const encodedString = encode([ "foo", "bar", "baz" ]);

console.log(decode(encodedString));




