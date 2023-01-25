// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


const result = (nums,target) => {
    let check = false;
    
    const L = nums.length;

    for( let i = 0; i <= L; i++){
        for( let j = 0; j <= L; j++){
            if(i != j){
                if(nums[i] + nums[j] === target){
                    
                    check = true;
                    return [i,j]
                }
            }
        }
        
    }
    if(check === false){
        return false
    }
    
}


let nums = [2,7,11,15];

let target = 9;

console.log(result(nums,target));