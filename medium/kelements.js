// Given an integer array nums and an integer k, 
// return the k most frequent elements. You may return the answer in any order.

function topKFrequent(nums, k) {
    // Create a hash map to store the frequency of each element
    const freqMap = {};
    for (let i = 0; i < nums.length; i++) {
      if (freqMap[nums[i]] === undefined) {
        freqMap[nums[i]] = 1;
        console.log("From if statement: ",freqMap)
      } else {
        freqMap[nums[i]]++;
        console.log("From else statement: ",freqMap)
      }
    }

    console.log("Hash Map after loop",freqMap)
    
    // Sort the keys of the hash map by frequency and this returns string
    const sortedKeys = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);
    console.log("Sorted Keys :",sortedKeys);
    
    // Return the k most frequent elements
    const result = [];
    console.log("Sorted Keys Length  :",sortedKeys.length);
    for (let i = 0; i < k && i < sortedKeys.length; i++) {
      
      result.push(parseInt(sortedKeys[i])); //converting string into integer
    }
    return result;
  }


  
  


console.log("The result is :",topKFrequent([1,1,1,2,2,3],2))


//Execution line by line


  // From if statement:  { '1': 1 }
  // From else statement:  { '1': 2 }
  // From else statement:  { '1': 3 }
  // From if statement:  { '1': 3, '2': 1 }        
  // From else statement:  { '1': 3, '2': 2 }      
  // From if statement:  { '1': 3, '2': 2, '3': 1 }
  // Hash Map after loop { '1': 3, '2': 2, '3': 1 }
  // Sorted Keys : [ '1', '2', '3' ]
  // Sorted Keys Length  : 3
  // The result is : [ 1, 2 ]