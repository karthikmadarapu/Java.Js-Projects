
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
