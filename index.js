//write your code here
// Declare a function name reverse string that takes string parameter.
// Initialized  the string
// Declare for loop 
// Reverse the string 
// Print the console.log

function reverseString(str){
  let newString = "";
  for(let i = str.length - 1; i >= 0; i--){
        newString = newString + str[i];
} 
return newString 
}
console.log(reverseString("damian"))