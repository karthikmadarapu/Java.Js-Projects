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



// check EVEN or ODD

const  myInput = document.getElementById("formInput");
const  button = document.getElementById("myButton");
const  result = document.getElementById('result');

button.addEventListener("click", (){
const inputVal = myInput.value;
 

if (inputVal === ''){
    result.textContent = "please enter the number first..." ;
    return ;

} 



});








