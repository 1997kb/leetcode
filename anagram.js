// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word 
//or phrase, typically using all the original letters exactly once.


function isAnagram(s, t) {
  // If the two strings have different lengths, they cannot be anagrams
  if (s.length !== t.length) {
    return false;
  }
  
  // Create a character frequency map for string s
  const freqMap = {};
  for (let i = 0; i < s.length; i++) {
    
    const char = s[i];
   
    freqMap[char] = (freqMap[char] || 0) + 1;
    
  }
  // Check if each character in string t is in the frequency map
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!freqMap[char]) {
        console.log("returned from if statement")
      return false;
    } else {
      console.log(freqMap[char])
      freqMap[char]--;
      console.log(freqMap)
    }
  }
// If we made it this far, all characters in t were found in s
  return true;
}

console.log(isAnagram("aacc","caca"));






