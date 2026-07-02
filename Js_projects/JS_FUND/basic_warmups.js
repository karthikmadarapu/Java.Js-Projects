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