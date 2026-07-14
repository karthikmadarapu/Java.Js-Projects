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

// DUPLICATE REMOVER 
function duplicateRmv(arr1, arr2){

    const noDup = [];

    for(const item of arr1){
        if(arr2.includes(item) && !noDup.includes(item)){

            noDup.push(item);
        }
    }

    return noDup;

};

console.log(duplicateRmv([1,2,3,4,5,5,3,3,3,3], [3,2,3,4,5,2,2,4,3,3,]));


// Array string reversal problems

function revString(string){
    
    let finalString = "";

    for(let  i = string.length-1; i >= 0; i--){
         
        finalString += string[i];
    }

    return finalString;

}

console.log(revString("hello"));


// array chunking loop
function arrChunk(arra, size){

   let finalOutput = [];
   for(let i=0; i < arra.length; i += size){

      const chunkz = arra.slice(i, i+size);
     
      finalOutput.push(chunkz);
    }
   return finalOutput;
}


console.log(arrChunk([1,2,3,4,5,5],2));


// number guesser  game range 1-50

function guessTheNum(nums){

    const strictNum = parseInt(nums, 10);

    if(strictNum <= 24){
        return "too low, guess a bit high";
    }
    else if(strictNum > 25){
        return "umm a bit high!!, try low next.";

    }
   
    if(strictNum === 25){
        return "you are a hero!!! 25 guess num";
    }
}

console.log(guessTheNum(1000));
// advanced optimal solution for duplicate checker 

function dupRemoverOptimal(param){

    const seen = {};
    const result = [];

    for(const item of param){
        if(!seen[item]){
            seen[item] = true;
            result.push(item);
        }
    }

    return result;

}

const array = [1,2,2,2,3,2,1,1,3,3,1,1,3,3,12,1,2];

console.log(dupRemoverOptimal(array));
