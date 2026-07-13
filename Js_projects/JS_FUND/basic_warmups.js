//    CURRENCY CONVERTER

    function currencyConverter(amount, exchangeRate){
     
        return amount * exchangeRate;
       

    }

    console.log(currencyConverter(10000, 65.48));

    
    // find the Area/Perimeter of rectangle

     function calcRectangle(width, height){
        
        const area = width * height;
        const perimeter = 2 * (width + height) ;

        return `Area: ${area}, Perimeter: ${perimeter}.`;
     

     }

     console.log(calcRectangle(7, 8));


    //  Minute to Seconds generator
    
    function toSeconds(min){
        
        const tosec = min * 60;
         return `${tosec} Seconds.`;


    }

    console.log(toSeconds(15));

    // Find the average of three values

    // Average formula = sum of values/number of total values

    function findTheAvg(num1, num2, num3){

        const result = (num1 + num2 + num3) / 3 ;

        return `The ans is : ${result}`;
    }

    console.log(findTheAvg(10, 20, 30));


    // BasketBall team total generator 

    function teamTotal(twoPointer, threePointer){
        const twoR = twoPointer * 2;
        const threeP = threePointer * 3;
        const totalResult = twoR + threeP;

        return `Your Team  total is: ${totalResult}`;

    }

    console.log(teamTotal(10, 7));


    // CONDITIONAL PROBLEMS
     function getTicketPrice(age, isStudent){


        if(age <=12 || age >= 65){
            
            if(isStudent){
                return ` YOUR TICKET PRICE IS : $7 ONLY`;
            }

             return ` YOUR TICKET PRICE IS : $10 ONLY`;

        }

      if(age > 12 && age < 65){
        if(isStudent){
            return ` YOUR TICKET PRICE IS : $12 ONLY`;

        }
            return ` YOUR TICKET PRICE IS : $15 ONLY`;

      }

     }

    console.log(getTicketPrice(77, false ));

    // basic 3 param function with conditional statements

    function   basiCalc(num1, num2, operator){
        switch (operator) {
            case '+' :
                return num1 + num2;
            case '-' :
                return num1 - num2;
            case '*' :
                return num1 * num2;
            case '/' :
                if(num2 === 0){
                    return `Division by zero is not allowed.`;
                }
                return num1 / num2;
                default: 
                  return `Invalid operator. Please use +, -, *, or /.`;
                }

    }



      console.log(basiCalc(10, 5, '+'));
      console.log(basiCalc(10, 80, '*'));

    //   speed limit checker 

    function speedLimitChecker(speed){
        if(speed <= 60 ){
            return `YOU ARE SAFE "LEGAL SPEED" ${speed}`;
        }
        else if(speed >= 61 && speed <= 80 ){
            return `WARNING! WARNING! WARNING! ${speed}`;
        }
        else{
            return `YOU ARE COOKED MF ${speed}`;
        }
    }


    console.log(speedLimitChecker(99));

    // Rock paper scissors shoot 

    function playRound(player1, player2){
        if(player1 === player2){
            return `oh it's a tie`;
        }

       else if(
            (player1 === "rock" && player2 === "scissors") ||
            (player1 === "paper" && player2 === "rock") ||
            (player1 === "scissors" && player2 === "paper")){
           
            return  `${player1} wins ezzz`;
       }
        else {
            return  `${player2}wins....`;
        }

    }
    
    console.log(playRound("rock", "scissors"));
    console.log(playRound("rock", "rock"));




     let  arr = {};
    function pushTheEven(nums){

        for (const i= 0; i<= nums.length; i++){
     
            if(i % 2 === 0){
                arr.push();
            }

        }
        return `these are all the even nums ${arr}`;
    }

    console.log(1,2,3,4,5,5,);

// array /string manipulation...

// 1. word reverser algorithm
    function wordRev(word){

        const lowerTxt = word.toLowerCase();

        const  reversedOrder = lowerTxt.split("").reverse().join("");
        
        return lowerTxt === reversedOrder;
    };


    console.log(wordRev("raceudar"));


    // DUPLICATE FINDER
    function duplicateRemover(arr){

        const uniqueItems = [];

        for(const item of arr){
           if(!uniqueItems.includes(item)){
            uniqueItems.push(item);
           }
        }

        return uniqueItems;


    }

    console.log(duplicateRemover([1,2,3,4,5,6,4,3,2,2,1]));

    // capital first Letter function 


function titleCase(sentence){
      
    const words = sentence.split(" ");
    const capWords = [];

    for(const word of words){
        if(word.length > 0){
            const upperWord = word[0].toUpperCase() + word.slice(1);
            capWords.push(upperWord);

        }
    }

    return capWords.join(" ");
}


console.log(titleCase("hello world how are you"));

// array Element sum 

function sumArray(nums){
    
    let total = 0;
    for(const i of nums){
        total += i;
    }

    return `Your total is : ${total}`;
}


console.log(sumArray([1,2,3,4,45,5,5,4,3,2,2]));



// find The shortest word possible

function findTheShortest(sentence){

    const splitWord = sentence.split(" ");
    let  shortestWord = splitWord[0];

    for(const word of splitWord ){

        if(word.length < shortestWord.length){
            shortestWord = word;
        }
    }

    return shortestWord;
}

console.log (findTheShortest("the to is pretty beautiful"));

// SECURE COUNTER PROGRAM 
function createSecureCounter(){
    
    let runningTotal = 0;

    return function (numberToAdd){
        
        runningTotal +=  numberToAdd;
        return runningTotal;
    };

}

const myCounter = createSecureCounter();

console.log(myCounter(6));
console.log(myCounter(10));
console.log(myCounter(15));


// TRUTHY OBJJECT EVALUATOR

function truthyObjectEval(obj){
    
    const falsyKeys = [];

    for( const key in obj ){
        if(!obj[key]){
            falsyKeys.push(key);
        }
    }

    return falsyKeys;
    
}
 const objectaaaa = { name: "Alex", score: 0, active: false, id: "" };
console.log(truthyObjectEval(objectaaaa));


// remove array duplicates

function rmvdup(arr_arr){

    const nums = [];
    for(const i of arr_arr){
        if(!nums.includes(i) ){
            nums.push(i);
        }
    }
    return nums;
}

const array = [1,2,2,4,5,3,3,5,3,2,2,3,3,2,4,5,5,5,6,6,4,4,4];
console.log(rmvdup(array));
// fidn the second largest 

function findTheSecondLargest(arrs){
    
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(const num of arrs){
        if(num > largest ){
            secondLargest = largest;
             
            largest = num;
        }
        else if( num >secondLargest && num !== largest){
            secondLargest = num;
        }
    }
    return secondLargest;



}

const nums =[1,33,5,3,5,22,56];
console.log(findTheSecondLargest(nums));


function numDupli(arrays){
    const  nums4 = [];
    for (const i of arrays){
        if(!nums4.includes(i)){
            nums4.push(i);
        }
    }
    return nums4;
}

const numi = [1,23,4,4,4,3,2,22,23];

console.log(numDupli(numi));




// Brain refresh problems 
function summing(arrays_){

    let totl = 0;
    for(const number of arrays_){
        totl += number;
    }
    return totl;

}

const myArr = [5,6,7,5,4,3,3,4,3,23,2,4,5,5,3,3];

console.log(summing(myArr));


// problem 2

function findTheMax(nums){
    
    let  maxVar = -Infinity;
    
    for(const num of nums){
        if(num > maxVar){
            maxVar = num;
        }
    }
    return maxVar;

    
}


console.log(findTheMax([1,44,5,2,99,100]));





