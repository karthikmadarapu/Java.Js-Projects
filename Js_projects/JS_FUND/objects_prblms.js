// group the person acc to age group

function groupingByAge(people){

    const grouped = {};
    
    for(const person of people){
       
        const age = person.age;
        const name = person.name;

       
        if(!grouped[age]){
            grouped[age] = [];
        }
        grouped[age].push(name);
    }

    return grouped;

}

const inputPeople = [ 
 {name:"John",age:20},
 {name:"Mike",age:25},
 {name:"Anna",age:20},
 {name:"Sarah",age:25}
];

console.log(groupingByAge(inputPeople));


// find The person with highest salary
 
function highestSalPerson(people){

    let highestPaid = people[0];

    for(const person of people){
        if(person.salary > highestPaid.salary){
            highestPaid = person;
        }
    }
    return highestPaid;
}

const  employees = [
 {name:"John", salary:5000},
 {name:"Mike", salary:8000},
 {name:"Anna", salary:6000}
];

console.log(highestSalPerson(employees));


function objectDiminisher(arr){

    const resultObj = {};
    for(const obj of arr){

        for(const key  in obj){  
            resultObj[key] = obj[key];
        }
    }

    return resultObj;
}
const inputData = [{a:1}, {b:2}, {c:3}, {d:4}];

console.log(objectDiminisher(inputData));


//  how do we get the mini objects vanished 
function objectRemover(array){

    const finalObject = {};

    for(const obj of array){
        for(const key in obj){
            finalObject[key] = obj[key];
        }
    }
    return finalObject;

}


console.log(objectRemover(inputData));

// objects basic problems (mind grip)

function counterObj(fruits){

    const finalobject = {};

    for(const fruit of fruits){

        if(finalobject[fruit]){

            finalobject[fruit] += 1;
        }
        else{
            finalobject[fruit] = 1;
        }
        
    }
    return finalobject;
}

const fruits = ["apple","banana","apple","orange","banana","apple"];

console.log(counterObj(fruits));

// each letter counter program 

function letterCounter(word){
    const finalRes = {};

   const splitword =  word.split("");

   for(const letter of splitword){
           
       if(finalRes[letter]){
           finalRes[letter] += 1;
       }
       else{
        finalRes[letter] = 1;
       }
   }
   return finalRes;

     

}


// optimal version 

function optLetterCounter(word){
    const finalRes = {};

  

   for(const letter of word){
           
       finalRes[letter] = (finalRes[letter] || 0) + 1;

   }
   return finalRes;

     

}

const word = "javascript";

console.log(optLetterCounter(word));


// find the most frequent number
function findTheMostFrequent(numArray){
    const counts = {};
    let maxCount = 0;//This is for the value 
    let champion = null ; // this is for the  key 



    for(const num of numArray){
        counts[num] = (counts[num] || 0) + 1;

        if(counts[num] > maxCount){
            maxCount = counts[num];
            champion = num;
        }
    }
    return Number(champion) ;
    // return counts;
}

const numsArray = [1,2,2,2,3,3,3,3,4,4,4,4];
console.log(findTheMostFrequent(numsArray));


// finding the max frequent num but with a twist 

function findTheMostFrequent_Matching(numArray){
    const counts = {};
    let maxCount = 0;
  
    for(const num of numArray){
        counts[num] = (counts[num] || 0) + 1;

        if(counts[num] > maxCount){
            maxCount = counts[num];
          
        }
    }


    const champion = [];
    
    for(const eachNum in counts){
        if(counts[eachNum] === maxCount){
            champion.push(Number(eachNum));
        }
    }
    return  champion.length === 1 ? champion[0] : champion
    // return counts;
}

console.log(findTheMostFrequent_Matching(numsArray));


// array to the object converter 

function arrToObj(user){

    const resultObj = {};

    for(const info of user){

        const key = info[0];
        const val = info[1];

        if(val !== null && val !== undefined){
            resultObj[key] = val;
        }
    }
    return resultObj;
   
   
    }

const myDetails = [
 ["name","John"],
 ["age",22],
 ["city","Toronto"]
];
console.log(arrToObj(myDetails));





// object rehearsing 

function objectVanisher(array){

    const resultObj = {};

    for(const sObj of array ){

        for(const val in sObj){
            resultObj[val] =sObj[val];
        }
    }

    return resultObj;
}

console.log(objectVanisher(inputData));



function arr2obj(details){
   const  resultObj = {};
   for(const infos of details){
    const key = infos[0];
    const val  = infos[1];
    if(val !== null && val !== undefined){
    resultObj[key] = val;
    }

   }
   return resultObj;
}

console.log(arr2obj(myDetails));

