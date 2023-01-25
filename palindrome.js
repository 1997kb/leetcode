// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.


const palindrome = (num) => {
	 if(Math.sign(num) === -1){
	 	return false
	 }else{
	 	if(num.toString() === num.toString().split('').reverse().join('')){
	 		return true
	 	}else{
	 		return false
	 	}
	 }

}


console.log(palindrome(121))