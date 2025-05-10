//this will show in the console
console.log("yo!!");
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
valueToo = 90;
let sum = valueWan + valueToo;

if (valueWan === valueToo) {
    return sum * 3;
    console.log(sum);
}




function exercise3() {
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
    return (randomNum1 === 50 || randomNum2 === 5 || (randomNum1 + randomNum2) === 50) ? true : false;


    
}