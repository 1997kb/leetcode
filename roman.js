//take input
//convert into uppercase



const romantoInt = (num) => {

let sum = 0;
let roman = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
}

for( let i = 0; i<num.length;i++){
   if(i >0 && roman[num[i]] > roman[num[i-1]]){
    sum = sum + roman[num[i]] - 2 * roman[num[i-1]]
   }else{
    sum += roman[num[i]];
   }
}
console.log(sum);
return sum;

}
romantoInt("MCMXCIV")



