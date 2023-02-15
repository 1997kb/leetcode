// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word 
//or phrase, typically using all the original letters exactly once.


const isAnagram = (s,t) => {
    if( s.length != t.length){
        return false
    }

    

   
    let arr1 = [...new Set(s.split("").sort())]
    let arr2 = [...new Set(t.split("").sort())]
    if(JSON.stringify(arr1) === JSON.stringify(arr2)){
        return true
    }else{
        return false
    }

    
   
}

console.log(isAnagram("aacc","ccac"));