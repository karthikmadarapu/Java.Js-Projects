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











