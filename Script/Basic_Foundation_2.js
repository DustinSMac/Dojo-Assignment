// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function plrh(arr) {
    max = min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        } else(min = arr[i]);
    }
    console.log(min);
    return (max);
}
// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function pora(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return arr[i];
        }
    }
}
// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function doubleVision(arr) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i]);
    }
    return newArr;
}
// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function Positive3(arr) {
    countP = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            countP += 1;
        }
    }
    arr[arr.length - 1] = countP;
    return arr;
}
// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function EvensAndOdds(arr) {
    for (var i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
            console.log("Evens more so!");
        } else if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
            console.log("That's odd!");
        }
    }
}
x = [1, 3, 4, 2, 4, 6];
EvensAndOdds(x);
// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function IncrementTheSecond(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr[i] += 1;
        }
    }
    return arr;
}
x = [1, 2, 3, 4, 5];
console.log(IncrementTheSecond(x));
// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function PreviousLength(arr) {
    newArr = [arr[0]];
    for (var i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i].length);
    }
    return newArr;
}
x = ["hello", "dojo", "awesome", "hello", "world"];
console.log(PreviousLength(x));
// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function AddSeven(arr) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}
x = [1, 2, 3, 4, 5];
y = AddSeven(x);
console.log(x, y);
// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function ReverseArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i < (arr.length - 1) / 2) {
            var temp = arr[i];
            arr[i] = arr[arr.length - (i + 1)];
            arr[arr.length - (i + 1)] = temp;
        }
    }
    return arr;
}
x = [1, 2, 3, 4, 5, 6];
console.log(ReverseArray(x));
// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function MakeNegative(arr) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            newArr.push(arr[i] * -1);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
x = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log(MakeNegative(x));
// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function AlwaysHungry(arr) {
    noFood = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("Yummy!");
        } else {
            noFood += 1;
        }
    }
    if (noFood != 0) {
        console.log("I'm hungry!");
    }
}
x = ["hello", "dojo", "awesome"];
AlwaysHungry(x);
// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardCenter(arr) {
    newArr = arr;
    for (var i = 0; i < newArr.length; i++) {
        if (i < (newArr.length - 1) / 2) {
            if (i % 2 == 0) {
                temp = newArr[i];
                newArr[i] = newArr[newArr.length - (i + 1)];
                newArr[newArr.length - (i + 1)] = temp;
            }
        }
    }
    return newArr;
}
x = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
console.log(swapTowardCenter(x));
// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function Scale(arr, num) {
    for(var i = 0; i < arr.length; i++){
        arr[i]*=num;
    }
    return arr;
}
x=[1, 2, 3, 4, 5];
console.log(Scale(x,6));