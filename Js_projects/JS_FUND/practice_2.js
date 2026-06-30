    
    // AGE GUARD!!!!
    const ageInput = document.getElementById("textinp");
    const secretRoomBtn = document.getElementById("btn02");
    const verifyBtn = document.getElementById("btn01");
    const message = document.getElementById("statusmsg");

    verifyBtn.addEventListener('click', ()=> {
    
        const age = parseInt(ageInput.value, 10);

        if(isNaN(age)){
         message.textContent= "Pleasee Enter a valid Age!!!"
         return;

        }
         
      const isAdult = age >= 18;
      
      secretRoomBtn.disabled = !isAdult ;
      message.textContent = isAdult ? "Access Granted!" : "Access Denied: Under 18.";



    });






    // Password Generator

    const  inputPass = document.getElementById("passwordInput");
    const lengthVerify = document.getElementById("lengthRule");
    const verifyNum = document.getElementById("numberRule");


    inputPass.addEventListener('input', () => {
        const password = inputPass.value;
      
         if(password.length >= 8){
           
             lengthVerify.textContent = "✔ At least 8 characters";
             lengthVerify.style.color = "green";

         }
         else{
            lengthVerify.textContent = "✖ At least 8 characters";
             lengthVerify.style.color = "red";
         }

         const hasNum = /\d/.test(password);

         if(hasNum){
             verifyNum.textContent = "✔ Contains at least one number";
             verifyNum.style.color = "green"
         }
         else{
            
             verifyNum.textContent = "✖ Contains at least one number";
             verifyNum.style.color = "red"
         }


    });


    // DYNAMIC TODO LIST

    const inputTodo  = document.getElementById("inputTodo");
    const incBtn = document.getElementById("todoBtn");
    const resultStat = document.getElementById("resultLi");

   incBtn.addEventListener('click', ()=>{
    
    const usertxt = inputTodo.value.trim();
    
    
    if(usertxt === ""){
        alert("please enter the value first.")
        return;
    }

    const li = document.createElement("li");
   
    li.innerHTML = `
        <span> ${usertxt} </span>
        <button class= "delete-btn"> Delete </button> 
    `;
    resultStat.appendChild(li);

    inputTodo.value = " ";
    inputTodo.focus();


   });

   resultStat.addEventListener('click', (event) =>{

    if(event.target.classList.contains("delete-btn")){
        const listItemToDelete = event.target.parentElement;

        listItemToDelete.remove();
    }

   });




