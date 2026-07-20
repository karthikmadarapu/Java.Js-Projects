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