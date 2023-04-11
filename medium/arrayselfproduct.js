// Given an integer array nums, return an array answer such that answer[i] 
// is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// const multiply = (nums) => {
//     const n = nums.length;
//     const answer = new Array(n);
//     answer[0] = 1;

//     for(let i = 1 ; i < n;i++){
//         answer[i] = answer[i-1] * nums[i-1];
        
//         // console.log(`For i = ${i} answer[${i}] = ${answer[i-1]} * ${nums[i-1]} `)
//         // console.log(answer[i])
//     }
    
//     console.log("Prefix product :",answer)
//     console.log("Nums =",nums);
//     console.log('\n')
//     let suffixProduct = 1;
    
//     for (let i = n - 1; i >= 0; i--) {
//         console.log("answer from second phase",answer[i])
//         console.log("Suffix Product",suffixProduct)
//         console.log("Nums ",nums[i])
//         console.log("i = ",i)
//         answer[i] *= suffixProduct;
//         console.group("After operation",answer[i]);
//         suffixProduct *= nums[i];
//     }
    
//     console.log("Final answer:",answer);


// }

// console.log(multiply([1,2,3,4]))


