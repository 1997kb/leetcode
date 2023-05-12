// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

function longest(nums){
    const set = new Set(nums);

    for(let num of set){
        if(!set.has(num - 1)){
            const current_num = num;
            const current_count = 1;
            
            while(set.has(current_num + 1)){
                current_num = current_num + 1;
                current_count = current_count + 1;
            }
            
        }
        


    }

    return current_count;
    
}


console.log(longest([100,4,200,1,3,2]));