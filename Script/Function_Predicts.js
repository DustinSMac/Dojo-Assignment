//Predict 1

function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting();
    console.log(word);

//function greeting get called. first line: Return "hello". it stop here.
//now, that word is attached to variable called word. now word is "Hello".
//console.log(word) will become "Hello".

//Predict 2

function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        return sum;
    }
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//fuction add(3,5) get called. "Summing numbers!"" will be printed, then "num1 is: " + num1 in which case is now 3 will get printed
//, then "num2 is: " + num2 in which case is now 5 will also get printed. variable sum equal to 3 + 5 = 8 and get return to the function add(3,5)
//which has been attached to variable result1 now. Same thing with result2 for add(4,7) which will print out "Summing Number!", "num1 is: 4", and "num2 is: 7" and also return result of 11 to the function.
//console.log(result1) will print out 8, console.log(result2) will print out 11.

//Predict 3

function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
            }
            else{
                console.log(i);
            }
        }
    }
highFive(6)

//let's call function highFive by typing highFive(6).
//At first, i = 0, i < num(which is 6), i != 5, therefore console.log(i) which is 0 will be printed, now i is increase by 1 to 10
//i = 1, i < num(which is 6), i != 5, therefore console.log(i) which is 1 will be printed, now i is increase by 1 to 2;
//i = 2, i < num(which is 6), i != 5, therefore console.log(i) which is 2 will be printed, now i is increase by 1 to 3;
//i = 3, i < num(which is 6), i != 5, therefore console.log(i) which is 3 will be printed, now i is increase by 1 to 4;
//i = 4, i < num(which is 6), i != 5, therefore console.log(i) which is 4 will be printed, now i is increase by 1 to 5;
//i = 5, i < num(which is 6), i == 5, thereforce console.log("High Five!") will be printed, now i is increase by 1 to 6;
//i = 6, i = num, the for loop stop here, function break.
//result will be 0,1,2,3,4,High Five!.