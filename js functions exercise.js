// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9) + " maxOfTwoNumbers - 1");
  
  //2. Define a function, as a function expression, `maxOfThree` that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
  var maxOfThree = function(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
      return num1; 
    } else if(num2 > num1 && num2 > num3){
      return num2;
    } else if(num3 > num1 && num3 > num2){
      return num3;
    } else{
      return num1; 
    }
  }
  console.log(maxOfThree(0,85,-98) + " maxOfThree - 2");
  
  //3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
  function isCharAVowel(char){
    if(char.length === 1 && char === 'a' ){
      return true;
    } else if(char.length === 1 && char === 'e'){
      return true;
    } else if(char.length === 1 && char === 'i'){
      return true;
    } else if(char.length === 1 && char === 'o'){
      return true;
    } else if(char.length === 1 && char === 'u'){
      return true;
    } else if(char.length === 1 && char === 'y'){
      return true;
    } else if(char.length > 1){
      console.log("the function has been invoked using more than one character. please try again using only one character");
      return false;
    } else{
      return false; 
    }
  }
  console.log(isCharAVowel('e') + " isCharAVowel - 3");
  
  //4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
  var sumArray = function(array){
   let sum = 0;
    for(var i = 0; i < array.length; i++){
      sum = sum + array[i];
      
    }
    return sum; 
  }
  
  console.log(sumArray([2,3,4,5,6]) +" sumArray - 4");
  //5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.
  function multiplyArray(array){
   let sum = array[0];
    for(var i = 1; i < array.length; i++){
      sum = sum * array[i];
      
    }
    return sum; 
  }
  console.log(multiplyArray([2,4,5]) + " multiplyArray - 5");
  
  //6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.
  var numArgs = function(){
    return arguments.length;
  }
  console.log(numArgs(1,2,3,4) + " numArgs - 6");
  //7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".
  function reverseString(string1){
    array1 = [];
    for(var i = 0; i < string1.length; i++){
      array1.push(string1[i]);
    }
    reversed = array1.reverse().join('');
    
    output = reversed;
    return output;
  
  }
  console.log(reverseString('rockstar') + " reverseString - 7");
  //8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the length of the longest string.
  var longestStringInArray = function(array){
    var longest = 0;
    for(var i = 0; i < array.length; i++){
      if(array[i].length > longest){
        longest = array[i].length;
      } 
    }
    return longest; 
  }
  
  console.log(longestStringInArray(['jsjsjsjsjs','jsjs', 'jsjsjsjsjjssjsjsjsjsjsjsj']) + " longestStringInArray - 8");
  //9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.
  function stringsLongerThan(array, num1){
    var comparable = num1;
    index = [];
    for(var i = 0; i < array.length; i++){
      if(array[i].length > comparable){
        index.push(array[i]);
      }  
    }
    return index; 
  } 
  console.log(stringsLongerThan(['test', 'no', 'cookies'], 3) + " stringsLongerThan - 9");
  
  