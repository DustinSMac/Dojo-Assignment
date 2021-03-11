// for(var num = 0; num < 15; num++){
//     console.log(num);
// }

//num = 0, console.log num = 0, now num increase by 1 to num = 1
//num = 1, console.log num = 1, now num increase by 1 to num = 2
//num = 2, console.log num = 2, now num increase by 1 to num = 3
//num = 3, console.log num = 3, now num increase by 1 to num = 4
//num = 4, console.log num = 4, now num increase by 1 to num = 5
//num = 5, console.log num = 5, now num increase by 1 to num = 6
//num = 6, console.log num = 6, now num increase by 1 to num = 7
//num = 7, console.log num = 7, now num increase by 1 to num = 8
//num = 8, console.log num = 8, now num increase by 1 to num = 9
//num = 9, console.log num = 9, now num increase by 1 to num = 10
//num = 10, console.log num = 10, now num increase by 1 to num = 11
//num = 11, console.log num = 11, now num increase by 1 to num = 12
//num = 12, console.log num = 12, now num increase by 1 to num = 13
//num = 13, console.log num = 13, now num increase by 1 to num = 14
//num = 14, console.log num = 14, now num increase by 1 to num = 15
//num = 15, which doesn't fit the num<15 anymore, so the for loop stop here.
// final result should be as followed: 1,2,3,4,5,6,7,8,9,10,11,12,13,14.

// for(var i = 1; i < 10; i+=2){
//     if(i % 3 == 0){
//         console.log(i);
//     }
// }

//i = 1, i % 3 != 0, nothing is log, now i is increase by 2 to 3
//i = 3, i % 3 == 0, i = 3 is log, now i is increase by 2 to 5
//i = 5, i % 3 != 0, nothing is log, now i is increase by 2 to 7
//i = 7, i % 3 != 0, nothing is log, now i is increase by 2 to 9
//i = 9, i % 3 == 0, i = 9 is log, now i is increase by 2 to 11
//i = 11, i doesn't fit the i<10 anymore, so the for loop stop here.
//final result should be as followed: 3,9.

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

//j = 1, j % 2 != 0, test the else if, j %3 != 0, console log j = 1, now j is increase by 1 to 2;
//j = 2, j % 2 == 0, j got increase by 2 to 4, console log j = 4, now j is increase by 1 to 5;
//j = 5, j % 2 != 0, test the else if, j %3 != 0, console log j = 5, now j is increase by 1 to 6;
//j = 6, j % 2 == 0, j got increase by 2 to 8, console log j = 8, now j is increase by 1 to 9;
//j = 9, j % 2 != 0, test the else if, j %3 == 0, j got increase by 1 to 10, console log j =10, now j is increase by 1 to 11;
//j = 11, j % 2 != 0, test the else if, j %3 != 0, console log j =11, now j is increase by 1 to 12;
//j = 12, j %2 == 0, j is increase by 2 to 14, console log j = 14, now j is increase by 1 to 15;
//j = 15, j % 2 != 0, test the else if, j %3 == 0, j is increase by 1 to 16, console log j = 16, now j is increase by 1 to 17;
//j = 17, doesn't fit the criteria anymore, so the for loop stop here.
//final result should be as followed: 1,4,5,8,10,11,14,16.