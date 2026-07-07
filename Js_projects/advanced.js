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


// ID GENERTOR 

function* IDGenerator(){

    let id = 1;
    while ( true){
        yield  `user_count_${id++}`;
    }
}

const idIterator = IDGenerator();


console.log(idIterator.next().value);
console.log(idIterator.next().value);
console.log(idIterator.next().value);
console.log(idIterator.next().value);

// THE CUSTOM ARRAY CHUNKING LOOP

function  chunkArray(array, size){

    const finalChunk = [];

    for(let i=0; i < array.length; i+= size){

        const chunk = array.slice(i, i + size );
        finalChunk.push(chunk);

    }
    return finalChunk;

}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); 
