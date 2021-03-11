// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function ArrayIt(arr) {
    var newArr=[];
    for (var i = 1; i <=arr; i++){
        newArr.push(i);
    }
    return newArr;
}
console.log(ArrayIt(255));

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getSum(arr) {
    var sum = 0;
    for (var i = 1; i <=arr; i ++) {
        if( i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(getSum(1000));

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumOdd(arr) {
    var sum = 0;
    for (var i = 1; i <= arr; i++) {
        if(i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOdd(5000));

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumAll(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumAll([1,2,5,8]));

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
var x = [1,5,2,5,7,9];
console.log(findMax(x));

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var x = sum / arr.length;
    return x;
}
var x = [1,5,2,5,7,9];
console.log(findAverage(x));

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrOdd(num) {
    var arr = [];
    for (var i = 0; i <= num; i++) {
        if (i %2 != 0) {
            arr.push(i);
        }
    }
    return arr;    
}
console.log(arrOdd(50));
// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterY(arr,Y) {
    var y = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > Y) {
            y += 1;
        }
    }
    return y;
}
var x = [1,2,3,4,5,6,7,8,9,10];
console.log(greaterY(x,6));
// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squares(arr) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]*arr[i]);
    }
    return newArr;
}
x=[1,2,3,4,5,6,7,8,9,10];
console.log(squares(x));
// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function Negatives(arr) {
    newArr=[];
    for(var i=0; i<arr.length; i++){
        if(arr[i]<=0){
            newArr.push(0);
        }
        else { newArr.push(arr[i])};
    }
    return newArr;
}
x=[-1,2,-3,4,-5,6,-7,9,-10];
console.log(Negatives(x));
// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function MaxMinAvg(arr) {
    max = min = arr[0];
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        else { min = arr[i]; };
        sum += arr[i];
    }
    var avg= sum / arr.length;
    var newArr=[max,min,avg];
    return newArr;
}
x=[1,2,3,4,5];
console.log(MaxMinAvg(x));
// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function SwapIt(arr){
    if(arr.length >= 2){
        var x = arr[arr.length-1];
        arr[arr.length-1] = arr[0];
        arr[0] = x;
        return arr;
    }
}
x=[1,2,3,4,5];
console.log(SwapIt(x));
// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function StringIt(arr) {
    for (var i=0; i<arr.length; i++){
        if(arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
x=[1,-2,3,-4,5];
console.log(StringIt(x));