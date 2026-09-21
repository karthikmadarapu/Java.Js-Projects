
async function threesecondBeeper(){

     const promise_beeper = new Promise((resolve, reject) => {

  
                    let isAdmin = true;

                   if(isAdmin){
                  
                    setTimeout(() => {

                         console.log(`lets go function implemented!!`);

                         resolve(`beeped!`)

                    }, 3000);
                }
                else{
                     
                    reject (`error`)
                }

    });

    let result = await promise_beeper;
    console.log(result);
}


threesecondBeeper();




//LAB 2 QUESTIONS 
 
const gretter = ((myarr) =>{

    for(const index of myarr) console.log(`Hello ${index}`);

});

const names = ['peter', 'rebbeca', 'mark', 'mike'];
gretter(names);



//EXERCISE 2  

 function capitalize(arr){

    


    const capitalizePhrases = arr.map( (eWord) =>{
        
        return eWord.charAt(0).toUpperCase() + eWord.slice(1)

         });

    return capitalizePhrases;

    } 

const games = ['cod', 'minecraft', 'valo', 'dota'];

console.log(capitalize(games));


//EXERCISE 3

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map((each) =>{
    return each.charAt(0).toUpperCase() + each.slice(1);
});

console.log(capitalizedColors);


// EXERCISE 4

const values = [1, 60, 34, 30, 79, 5];

const filteredValues = values.filter((eachVal) => eachVal < 20);

console.log(filteredValues);



//EXERCISE 5
const numsArray = [1, 2, 3, 4];

const calculateSum = numsArray.reduce((acc, curr) =>{

    return acc + curr;

}, 0)




const productArr = numsArray.reduce((acc, curr) =>{

    return acc * curr;
}, 1);

console.log(calculateSum);
console.log(productArr);






