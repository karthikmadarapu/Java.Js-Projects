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