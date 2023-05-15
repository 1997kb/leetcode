// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

function longest(nums){
    const set = new Set(nums);
    let longestStreak = 0;

    for(let num of set){
        if(!set.has(num - 1)){
            let current_num = num;
            let current_count = 1;
            
            while(set.has(current_num + 1)){
                current_num = current_num + 1;
                current_count = current_count + 1;
            }

            longestStreak = Math.max(longestStreak,current_count)
            
        }
        


    }

    return longestStreak

    
    
}


console.log(longest([100,4,200,1,3,2]));