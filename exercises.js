//Do not change any of the function names

function getBiggest(x, y) {

  if(x>y){
    return x;
  }else if(x===y){
    return x || y;
  }else {
    return y;
  }
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
}

function greeting(language) {

  if ( language === 'German'){
    return 'Guten Tag!';
  } else if (language === 'English') {
    return 'Hello!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else{
    return 'Hello!';
  }
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
}

function isTenOrFive(num) {

  if (num === 10 || num === 5){
    return true;
  }else{
    return false;
  }
  //return true if num is 10 or 5
  //otherwise return false
}

function isInRange(num) {
  if( num <50 && num >20){
    return true;
  }else {
    return false;
  }
  //return true if num is less than 50 and greater than 20
}

function isInteger(num) {

  if(num === Math.floor(num)){
    return true;
  } else {
    return false;
  }


  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
}

function fizzBuzz(num) {

  if ((num % 3 ) === 0 && (num % 5) === 0){
    return 'fizzbuzz';

  } else if ((num % 5) ===0){

    return 'buzz';

  } else if((num %3)===0){

    return 'fizz';

  }else{

    return num;
  }

 
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
}

function isPrime(num) {

var i;

var k = false;

for(i=2; i < num; i++){

  if (num % i === 0)
{
  k = false;
  break;
}
else{
  k=true;
}
}

return k;
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
}

function returnFirst(arr) {


  var array = arr[0];
  return array;
  //return the first item from the array
}

function returnLast(arr) {

  var array = arr[arr.length - 1];
  return array;
  //return the last item of the array
}

function getArrayLength(arr) {

  var array = arr.length;

  return array;


  //return the length of the array
}

function incrementByOne(arr) {

var i=0;

   var array= arr;

  for(i=0; i<= arr.length - 1; i++){

array[i] = arr[i] + 1;

    }
return array;

  //arr is an array of integers  
  //increase each integer by one
  //return the array
}

function addItemToArray(arr, item) {

  arr.push(item);

  return arr;

 
  //add the item to the end of the array
  //return the array
}

function addItemToFront(arr, item) {

  arr.unshift(item);

  return arr;

  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
}

function wordsToSentence(words) {

  var sentence='';
  var i;

  for(i=0; i<=words.length - 1; i++){

    if(i < words.length - 1){

    sentence += words[i] + ' ';
  }else {
    sentence += words[i];

  }
  }
  return sentence;

  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {

  var chkBoolean = false;

  var index;
for(index=0; index<= arr.length - 1; index++){
  
if (item === arr[index]){
  
  chkBoolean = true;
  break;
}
  
}
return chkBoolean;


  //check to see if item is inside of arr
  //return true if it is, otherwise return false
}

function addNumbers(numbers) {

  var count = 0;
  var i;

  for(i=0; i<= numbers.length - 1; i++){
  count = count + numbers[i];
}

  return count;
  //numbers is an array of integers.
  //add all of the integers and return the value
}

function averageTestScore(testScores) {

  var average;
  var count = 0;
  var i;

  for(i=0; i<= testScores.length - 1; i++){
  count = count + testScores[i];
}
  
  average = count / testScores.length;
  return average;
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
}

function largestNumber(numbers) {
  var i;
  var largest = numbers[0];
for(i=0; i< numbers.length - 1; i++){
  
  if(largest < numbers[i+1] ){
    
    largest = numbers[i + 1];
  }
}
return largest;


  //numbers is an array of integers
  //return the largest integer
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
