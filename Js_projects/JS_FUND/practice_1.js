const textInput = document.getElementById("textInput");
const displayCounter = document.getElementById("displayOutput");

textInput.addEventListener("input", function(){
    const textcount = textInput.value.length;

    displayCounter.textContent = "CHARACTERS: " + textcount; 
})





 