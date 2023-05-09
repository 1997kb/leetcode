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

function decode(str){
    console.log(str.split(";:"))
}


let lists = ["lint","code","love","you"];
console.log(encode(lists));


