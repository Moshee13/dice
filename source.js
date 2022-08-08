let counter = 0;

function magic(){
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    console.log(num1, num2);   

    if(num1===num2)
{
        document.getElementById("dice1").src = num1 + ".jpg";
        document.getElementById("dice1").className="animate__animated animate__bounce animate__infinte";
        document.getElementById("dice2").src = num2 + ".jpg";
        document.getElementById("dice2").className="animate__animated animate__bounce animate__infinte";
        document.getElementById("result").innerHTML="דאבל!";
        if(num1===6)
        
            document.getElementById("result").innerHTML="יצא לך 6:6!";
      counter++;  }
        
    

    else {
        document.getElementById("dice1").src = num1 + ".jpg";
        document.getElementById("dice1").className="";
        document.getElementById("dice2").src = num2 + ".jpg";
        document.getElementById("dice2").className="";
        document.getElementById("result").innerHTML="נסה שוב";
    }

    document.getElementById("counter").innerHTML= "כמות הפעמים שיצא לך דאבל" + counter;
    
}