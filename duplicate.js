//Given an integer array nums, 
//return true if any value appears at least twice in the array, and return false if every element is distinct.


// const containsDuplicate = (nums) => {
//     let check = false
//     for(let i = 0 ;i < nums.length ; i++){
//         for(let j = 0; j < nums.length ; j++){
//             if( i != j){
//                 if( nums[i] === nums[j]){
//                     check = true;
//                 }
//             }
//         }
//     }
//     return check

// }


const containsDuplicate = (nums) => {
    const set = new Set(nums);
    return set.size !== nums.length;

}

console.log(containsDuplicate([1,1,2,3,4]))