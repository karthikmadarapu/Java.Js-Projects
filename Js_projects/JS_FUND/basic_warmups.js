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


