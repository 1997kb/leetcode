// Determine if a 9 x 9 Sudoku board is valid. Only the filled 
// cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


function isValidSudoku(board) {
    // Check rows
    for (let i = 0; i < 9; i++) {
      const row = board[i];
      if (!isValidSet(row)) {
        return false;
      }
    }
  
    // Check columns
    for (let i = 0; i < 9; i++) {
      const column = [];
      for (let j = 0; j < 9; j++) {
        column.push(board[j][i]);
      }
      if (!isValidSet(column)) {
        return false;
      }
    }
  
    // Check sub-boxes
    for (let i = 0; i < 9;  ) {
      for (let j = 0; j < 9; j += 3) {
        const subBox = [];
        for (let k = i; k < i + 3; k++) {
          for (let l = j; l < j + 3; l++) {
            subBox.push(board[k][l]);
          }
        }
        if (!isValidSet(subBox)) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  function isValidSet(nums) {
    const set = new Set();
    for (const num of nums) {
      if (num !== '.') {
        if (set.has(num)) {
          return false;
        }
        set.add(num);
      }
    }
    return true;
  }
  















const board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
 console.log(isValidSudoku(board));
