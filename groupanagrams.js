// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.


function groupAnagrams(strs) {
    const map = new Map();
    
    for (let str of strs) {
      
      const key = str.split('').sort().join('');
      
      
      if (map.has(key)) {
        
        map.get(key).push(str);
        console.log("from If statement",map)

      } else {
        
        map.set(key, [str]);
        console.log("from else statement",map)
      }
    }
    
    return Array.from(map.values());
  }

  
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
