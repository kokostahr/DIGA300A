//this will show in the console
console.log("yo!!");

//current.write("<h1> Hey does this work?<h1>");

 //PROGRAMING EXERCISES
 /**Exercise 1:
Write an algorithm to display the area of a rectangle. Remember that
Area = Length x Width. */
//define the variables
length = 10;
width = 5;
let rectangleArea = length * width;
console.log(rectangleArea);

/**Exercise 2:
Write a JavaScript program to compute the sum of the two integers. If the two
values are same, then returns triple their sum. */
//HOW? Addition of 2 numbers, then we need a condition that with multiply by 3. 
//first define the ints

valueWan = 30;
 /** NICE ! I GOT 120. LET'S CHANGE VALUE2 */
//valueToo = 90;
valueToo = 30;
let sum = valueWan + valueToo;

if (valueWan === valueToo) {
      console.log(sum * 3);
}
else {
    console.log(sum);
}
//NICE! I GOT 180

/**Exercise 3:
Write a JavaScript program that generates two numbers and return true if one
of the numbers is 50 or if their sum is 50 */
//Going to use math.random for generator, then two conditions that checks the values = 50 or if their sum = 50
let randomNum1 = Math.floor(Math.random() * 60);
let randomNum2 = Math.floor(Math.random() * 70);

if (randomNum1 + randomNum2 === 50) {
    console.log("true jackson babes"); //WRONG!
}
else if (randomNum1 === 50 || randomNum2 === 50) {
    console.log("true babes");
}
else {
    console.log(randomNum1, randomNum2);
}

/** CORRECTIONS FOR EXERCISE 3 */
/**function exercise3() {
    //Generare two random values exclusive of 51
    let randomNum1 = Math.floor(Math.random() * 51);
    let randomNum2 = Math.floor(Math.random() * 51);

    if(randomNum1 === 50 || randomNum2 === 50 || (randomNum1 + randomNum2) === 50)
    {
        return true;
    }
    else {
        return false;
    }
    //Under the ES6 format, you can also write the above if statement as such:
    //return (randomNum1 === 50 || randomNum2 === 5 || (randomNum1 + randomNum2) === 50) ? true : false; 
}

exercise3();*/

/**Exercise 4:
Create a function that takes voltage and current and returns the
calculated power.
[ Formula: Current equals Power divided by Voltage ] */
//WHAT I DID SEEMS VERY WRONG
/**function exercise4(power) {
    let voltage = 70;
    let current = 90;

    let power = voltage * current;
    return power;
}*/
/**EXERCISE 4 CORRECTIONS T^T
 */
function exercise4(voltage, current) {
return current * voltage;
}

/** Exercise 5:
Please do all of these questions in the same script:
1. Write a program that generates a random integer between 1
and 10.
2. Find out whether that integer is less than five – and store the
result as a Boolean.
3. Make a string. If your bool from the last question is TRUE, store
the words “The number is less than five” inside that string. If the
bool is false, store the words “The number is greater than or
equal to five” inside the string.
4. Display the string inside the console.
5. Write code to display whether your random number is even or
odd. */


