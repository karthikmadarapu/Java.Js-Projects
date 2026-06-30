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