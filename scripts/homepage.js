//this will show in the console
console.log("yo!!");

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