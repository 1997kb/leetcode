// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.


// function groupAnagrams(strs) {
//     const map = new Map();
    
//     for (let str of strs) {
      
//       const key = str.split('').sort().join('');
      
      
//       if (map.has(key)) {
        
//         map.get(key).push(str);
        

//       } else {
        
//         map.set(key, [str]);
        
//       }
//     }
    
//     return Array.from(map.values());
//   }

  
// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));



// function check(num) {

//   return num * 2
// }


// const map = new Map();

// const anagrams = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// for(let i of anagrams){
//   var key = i.split('').sort().join('');
//   console.log(map)
//   console.log(key)
//   if(map.has(key)){
//     console.log("from if statement")
//     map.get(key).push(i);
    
//   }else{
//     console.log("from else statement")
//      map.set(key, [i]);
    
//   }
// }


// const map = new Map();

// const anagrams = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

// for(let i of anagrams){
//     const key = i.split('').sort().join('');
//     if(map.has(key)){
//         map.get(key).push(i); // add value in the existing key value pair
//     }else{
//         map.set(key,[i]); //add key value pair with [i] as an array to add further new items .
//     }
// }
// console.log(map)

// console.log(Array.from(map.values()));








