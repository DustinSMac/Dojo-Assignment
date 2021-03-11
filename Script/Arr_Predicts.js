//1.

var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

//arr.length = 7.
//i = 0, console log arr[0] = 8, now i is increase by 1 to 1;
//i = 1, console log arr[1] = 6, now i is increase by 1 to 2;
//i = 2, console log arr[2] = 7, now i is increase by 1 to 3;
//i = 3, console log arr[3] = 5, now i is increase by 1 to 4;
//i = 4, console log arr[4] = 3, now i is increase by 1 to 5;
//i = 5, console log arr[5] = 0, now i is increase by 1 to 6;
//i = 6, console log arr[6] = 9, now i is increase by 1 to 7;
//i = 7, no longer fit the i <arr.length (which is 7), for loop stop here.
//final result: 8,6,7,5,3,0,9.

//2.

var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

//arr.length = 7
//i = 0, arr[0] = 7, which % 2 != 0, console log "That is odd!", now i is increase by 1 to 1;
//i = 1, arr[1] = 3, which % 2 != 0, console log "That is odd!", now i is increase by 1 to 2;
//i = 2, arr[2] = 8, which % 2 == 0, console log arr[2] = 8, now i is increase by 1 to 3;
//i = 3, arr[3] = 4, which % 2 == 0, console log arr[3] = 4, now i is increase by 1 to 4;
//i = 4, arr[4] = 2, which % 2 == 0, console log arr[4] = 2, now i is increase by 1 to 5;
//i = 5, arr[5] = 0, which % 2 == 0, console log arr[5] = 0, now i is increase by 1 to 6;
//i = 6, arr[6] = 1, which % 2 != 0, console log "That is odd!", now i is increase by 1 to 7;
//i = 7, no longer fit the i<arr.length (which is 7), for loop stop here.
//final result: That is odd!,That is odd!,8,4,2,0,That is odd!.

//3.

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

//arr.length = 8
//i = 0, arr[0] = 1 > 0, arr[0] = 1 * -1 = -1. i is increase by 1 to 1;
//i = 1, arr[1] = 3 > 0, arr[1] = 3 * -1 = -3. i is increase by 1 to 2;
//i = 2, arr[2] = 8 > 0, arr[2] = 8 * -1 = -8. i is increase by 1 to 3;
//i = 3, arr[3] = -5 < 0, newArr got push with -5, arr[3] = -5 * -1 = 5, i is increase by 1 to 4;
//i = 4, arr[4] == 0, arr[i] becomes "zero". i is increase by 1 to 5;
//i = 5, arr[5] = -2 < 0, newArr got push with -2, arr[5] = -2 * -1 = 2, i is increase by 1 to 6;
//i = 6, arr[6] = 4 > -, arr[6] = 4 * -1 = -4. i is increase by 1 to 7;
//i = 7, arr[7] = -1 < 0, newArr got push with -1, arr[7] = -1 * -1 = 1, i is increase by 1 to 8;
//i = 8, for loop stop here.
// final result should be:
// arr=[-1,-3,-8,5,zero,2,-4,1]
// newArr=[-5,-2,-1]