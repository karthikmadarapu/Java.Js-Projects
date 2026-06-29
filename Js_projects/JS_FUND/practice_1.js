const textInput = document.getElementById("textInput");
const displayCounter = document.getElementById("displayOutput");

textInput.addEventListener("input", function(){
    const textcount = textInput.value.length;

    displayCounter.textContent = "CHARACTERS: " + textcount; 
})

// Small Addition calculator 

const numberOne = document.getElementById("input01");
const numberTwo = document.getElementById("input02");
const button = document.getElementById("myButton");
const totalOutput = document.getElementById("total");

button.addEventListener("click",function(){
    const val1 = Number(numberOne.value);
    const val2 = Number(numberTwo.value);

    const sum =  val1 + val2 ;

    totalOutput.textContent = "Result :" + sum ;

});



// Dynamic Greeter 

// const input = document.querySelector(#formInput);
// const button = document.querySelector(#myButton);
// const resultp = document.querySelector(#result);

 const input = document.getElementById("formInput");
 const mibutton = document.getElementById("myrButton");
 const resultp = document.getElementById("result");

function nameGreeting(name){
    const nameTrim = name.trim();
    return nameTrim ?  `Hello, ${nameTrim}!` : "please enter a  valid name."

}

mibutton.addEventListener('click', () => {

    resultp.textContent = nameGreeting(input.value);

});


// Counter Typer
const text = document.getElementById("mytextarea");
const  textOutput= document.getElementById("mioutput");

text.addEventListener('input', function(){

    const textCounter = text.value.length;
   
    textOutput.textContent = "CHARACTERS :" + textCounter;


});


{
 const inputElement = document.getElementById("myinput");
 const mebutton = document.getElementById("numberButton");
 const feedback = document.getElementById("resultFeedback"); 

 const targetNum = Math.floor(Math.random()*10) + 1;

 mebutton.addEventListener('click', ()=>{
    const userGuess = parseInt(inputElement.value, 10);

    if(isNaN(userGuess)|| userGuess < 1 || userGuess >10 ){
        feedback.textContent = "Please enter a number between 1 - 10.";
        return;
    }

    if(userGuess === targetNum){
        feedback.textContent = "🎉 Correct!";
    }
    else if(userGuess < targetNum) {
       
        feedback.textContent = "Too low! Try Again."
    }
    else{
        feedback.textContent = "Too High! Try Again."
    }
      
 });

}

// LIST MULTIPLIER!
{
    const listInput = document.getElementById("numberInput");
    const inputButton = document.getElementById("generatebtn");
    const legitList = document.getElementById("itemList");

    inputButton.addEventListener('click',()=>{

        const count = parseInt(listInput.value,10);
   
        if(isNaN(count)|| count < 1 ){
            alert("Please enter a number greater than 0");
               return; 
        }

        legitList.innerHTML ="";
        
        for(let i= 1; i <=count; i++){
            const newItem = document.createElement("li");
            newItem.textContent = `Item #${i}`;

            legitList.appendChild(newItem);

        }
        
        
    });




}









