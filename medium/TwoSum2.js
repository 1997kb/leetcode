// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. 
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.



//the following solution exceeds execution time

// function twosum(numbers,target){
//     const n = numbers.length;
//     let check = false;
   
//     for(let i = 0; i <= n;i++ ){
        
//        for(let j = 0 ; j <= n; j++){
//         if(i != j){
//             if(target === numbers[i] + numbers[j]){
//                 check = true;
//                 return [i+1,j+1]
//             }
//         }
        
//        }
//     }

//     return false
// }


// console.log(twosum([2,7,11,15],9));



//optimized method
function twoSum(numbers, target) {
    let left = 0; // pointer at the beginning of the array
    let right = numbers.length - 1; // pointer at the end of the array
  
    while (left < right) {
      const sum = numbers[left] + numbers[right];
  
      if (sum === target) {
        // Found the two numbers, return their indices (1-indexed)
        return [left + 1, right + 1];
      } else if (sum < target) {
        // Sum is smaller than the target, move the left pointer to the right
        left++;
      } else {
        // Sum is larger than the target, move the right pointer to the left
        right--;
      }
    }
  
    // No solution found
    return [];
  }
  
  // Example usage:
  const numbers = [2, 7, 11, 15];
  const target = 9;
  const indices = twoSum(numbers, target);
  console.log(indices); // Output: [1, 2]
  