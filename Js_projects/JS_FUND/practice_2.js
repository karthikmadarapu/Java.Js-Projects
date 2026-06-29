    
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
