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
