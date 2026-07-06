const createBankAcc = (initialAmount) =>{
    let  balance = initialAmount ;

    return {
        deposit(amount){
            balance += amount;
            return `Balance: ${balance}`;

        },
        withdraw(amount){
         if(amount > balance) return `Insufficient funds, try again!`;
         balance -= amount;
         return `Balance: ${balance}`;
        } 
    };



};


const  myAcc = createBankAcc(2000);
console.log(myAcc.deposit(500));
console.log(myAcc.balance);






// logger for errors

const createLogger = (environment) =>{
    return (message) =>{
      const  timeStamp = new Date().toISOString();
      
      return `[${environment.toUpperCase()}] ${timeStamp} ${message}`
    
    };
};

const logProductionError = createLogger("production");

console.log(logProductionError("Database Connection Failed!!!"));