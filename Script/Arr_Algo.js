var testArr = [6,3,5,1,2,4]

// Challenge 1: Print Values and Sum

var sum = 0;
for (var i = 0; i < testArr.length; i++) {
    console.log("Num " + testArr[i]);
    sum+=testArr[i];
    console.log("Sum " + sum);
}

//Challenge 2: Value * Position

var newArr=[];
for (var i = 0; i < testArr.length; i++) {
    newArr.push(testArr[i]*i);
}
console.log(newArr);