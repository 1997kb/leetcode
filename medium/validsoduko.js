// Determine if a 9 x 9 Sudoku board is valid. Only the filled 
// cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


var soduko = (arr) => {

    //check validity for row    
    // for( let i = 0; i<9;i++){
    //     const row = arr[i];
    //     if(isValidSet(row) === false){
    //         return false
    //     }
    // }

    //check validity for column
    for(let i = 0; i<9;i++){
        console.log("resetting column array")
        const column = [];
        
        for(let j= 0; j<9;j++){
            column.push(arr[j][i])
            console.log(column)
        }
    }


    function isValidSet(nums) {
        const set = new Set();
        for( const num in nums){
            if(num !== '.'){
                if(set.has(num)){
                    return false;
                }
                set.add(num);
            }
        }

        return true;
    }

    
    
}       


console.log(soduko([ 
['5', '3', '.', '.', '7', '.', '.', '.', '.'],
['6', '.', '.', '1', '9', '5', '.', '.', '.'],
['.', '9', '8', '.', '.', '.', '.', '6', '.'],
['8', '.', '.', '.', '6', '.', '.', '.', '3'],
['4', '.', '.', '8', '.', '3', '.', '.', '1'],
['7', '.', '.', '.', '2', '.', '.', '.', '6'],
['.', '6', '.', '.', '.', '.', '2', '8', '.'],
['.', '.', '.', '4', '1', '9', '.', '.', '5'],
['.', '.', '.', '.', '8', '.', '.', '7', '9']
]));
