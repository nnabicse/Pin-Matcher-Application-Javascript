function getPin() {
    const pin =  Math.round(Math.random()*10000);
    if((pin+"").length ==4){
        return pin;
    }
    else{
        return getPin();
    }
    
}

function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;   
};

document.getElementById("keypad").addEventListener("click", function(event){

    const number =  event.target.innerText;
    const calcInput =  document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number == "C"){
            calcInput.value = "";
        }

    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber+number;
        calcInput.value = newNumber;
    }
    
});


function verifyPin(){
    const pin = document.getElementById("display-pin").value;
    const typedNumbers = document.getElementById("typed-numbers").value;
    const matched = document.getElementById("matched");
    const notMatched = document.getElementById("not-matched");

    if(pin === typedNumbers){
       
        matched.style.display = "block";
        notMatched.style.display = "none";
        
    }
    else{
        notMatched.style.display = "block";
        matched.style.display = "none"; 
    }
}